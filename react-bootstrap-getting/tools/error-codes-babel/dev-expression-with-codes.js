/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
'use strict';

var evalToString = require('./evalToString');
var existingErrorMap = require('./codes.json');
var invertObject = require('./invertObject');

var errorMap = invertObject(existingErrorMap);

module.exports = function(babel) {
  var t = babel.types;

  var SEEN_SYMBOL = Symbol('dev-expression-with-codes.seen');

  // Generate a hygienic identifier
  function getProdInvariantIdentifier(path, localState) {
    if (!localState.prodInvariantIdentifier) {
      //生成一个不会和任何本地定义的变量冲突的标识符(identifier)
      localState.prodInvariantIdentifier = path.scope.generateUidIdentifier('prodInvariant');
      path.scope.getProgramParent().push({
        id: localState.prodInvariantIdentifier,
        /**
         * require("reactProdInvariant")
         *
         * interface CallExpression <: Expression {
         *    type: "CallExpression";
         *    callee: Expression | Super | Import;
         *    arguments: [ Expression | SpreadElement ];
         *  }
         *
         */
        init: t.callExpression(
          t.identifier('require'),
          [t.stringLiteral('reactProdInvariant')]
        ),
      });
    }
    return localState.prodInvariantIdentifier;
  }
  //构造二元表达式节点
  /**
   * process.env.NODE_ENV!=='production'
   *
   * interface MemberExpression <: Expression, Pattern {
   *    type: "MemberExpression";
   *    object: Expression | Super;
   *    property: Expression;
   *    computed: boolean;
   *   }
   */
  var DEV_EXPRESSION = t.binaryExpression(
    '!==',
    t.memberExpression(//左表达式//process.env
      t.memberExpression(
        t.identifier('process'),//process
        t.identifier('env'),//env
        false
      ),
      t.identifier('NODE_ENV'),//右表达式,NODE_ENV
      false
    ),
    t.stringLiteral('production')
  );

  return {
    pre: function() {
      this.prodInvariantIdentifier = null;
    },
    //节点访问器
    visitor: {
      Identifier: {
        enter: function(path) {//替换__DEV__
          // Do nothing when testing
          if (process.env.NODE_ENV === 'test') {
            return;
          }
          // Replace __DEV__ with process.env.NODE_ENV !== 'production'
          //如果你想检查节点的类型__DEV__
          if (path.isIdentifier({name: '__DEV__'})) {
            path.replaceWith(DEV_EXPRESSION);
          }
        },
      },
      CallExpression: {
        exit: function(path) {
          var node = path.node;
          // Ignore if it's already been processed
          //已经处理过的节点
          if (node[SEEN_SYMBOL]) {
            return;
          }
          // Insert `var PROD_INVARIANT = require('reactProdInvariant');`
          // before all `require('invariant')`s.
          // NOTE it doesn't support ES6 imports yet.
          //如果有require('invariant')则在最前边添加var PROD_INVARIANT = require('reactProdInvariant'
          if (
            path.get('callee').isIdentifier({name: 'require'}) &&
            path.get('arguments')[0] &&
            path.get('arguments')[0].isStringLiteral({value: 'invariant'})
          ) {
            node[SEEN_SYMBOL] = true;
            getProdInvariantIdentifier(path, this);
            //当调用者的标识符为invariant
          } else if (path.get('callee').isIdentifier({name: 'invariant'})) {
            // Turns this code:
            //
            // invariant(condition, argument, 'foo', 'bar');
            //
            // into this:
            //
            // if (!condition) {
            //   if ("production" !== process.env.NODE_ENV) {
            //     invariant(false, argument, 'foo', 'bar');
            //   } else {
            //     PROD_INVARIANT('XYZ', 'foo', 'bar');
            //   }
            // }
            //
            // where
            // - `XYZ` is an error code: a unique identifier (a number string)
            //   that references a verbose error message.
            //   The mapping is stored in `scripts/error-codes/codes.json`.
            // - `PROD_INVARIANT` is the `reactProdInvariant` function that always throws with an error URL like
            //   http://facebook.github.io/react/docs/error-decoder.html?invariant=XYZ&args[]=foo&args[]=bar
            //
            // Specifically this does 3 things:
            // 1. Checks the condition first, preventing an extra function call.
            // 2. Adds an environment check so that verbose error messages aren't
            //    shipped to production.
            // 3. Rewrites the call to `invariant` in production to `reactProdInvariant`
            //   - `reactProdInvariant` is always renamed to avoid shadowing
            // The generated code is longer than the original code but will dead
            // code removal in a minifier will strip that out.
            var condition = node.arguments[0];
            var errorMsgLiteral = evalToString(node.arguments[1]);

            var prodErrorId = errorMap[errorMsgLiteral];
            if (prodErrorId === undefined) {
              // The error cannot be found in the map.
              node[SEEN_SYMBOL] = true;
              if (process.env.NODE_ENV !== 'test') {
                console.warn(
                  'Error message "' + errorMsgLiteral +
                  '" cannot be found. The current ABC version ' +
                  '应当在打包之前运行 run `gulp abc:extract-errors`'
                );
              }
              return;
            }
            //interface BooleanLiteral <: Literal {
            //  type: "BooleanLiteral";
            //  value: boolean;
            // }
            //
            //interface CallExpression <: Expression {
            //  type: "CallExpression";
            //  callee: Expression | Super | Import;
            //  arguments: [ Expression | SpreadElement ];
            //}
            //
            //t.callExpression为构建表达式

            var devInvariant = t.callExpression(node.callee, [//参数
              t.booleanLiteral(false),
              t.stringLiteral(errorMsgLiteral),
            ].concat(node.arguments.slice(2)));

            devInvariant[SEEN_SYMBOL] = true;

            var localInvariantId = getProdInvariantIdentifier(path, this);
            var prodInvariant = t.callExpression(localInvariantId, [
              t.stringLiteral(prodErrorId),
            ].concat(node.arguments.slice(2)));

            prodInvariant[SEEN_SYMBOL] = true;

            //interface UnaryExpression <: Expression {
            //  type: "UnaryExpression";
            //  operator: UnaryOperator;
            //  prefix: boolean;
            //  argument: Expression;
            //}
            path.replaceWith(t.ifStatement(
              t.unaryExpression('!', condition),
              t.blockStatement([
                t.ifStatement(
                  DEV_EXPRESSION,
                  t.blockStatement([
                    t.expressionStatement(devInvariant),
                  ]),
                  t.blockStatement([
                    t.expressionStatement(prodInvariant),
                  ])
                ),
              ])
            ));
          } else if (path.get('callee').isIdentifier({name: 'warning'})) {
            // Turns this code:
            //
            // warning(condition, argument, argument);
            //
            // into this:
            //
            // if ("production" !== process.env.NODE_ENV) {
            //   warning(condition, argument, argument);
            // }
            //
            // The goal is to strip out warning calls entirely in production. We
            // don't need the same optimizations for conditions that we use for
            // invariant because we don't care about an extra call in __DEV__
            //
            //interface ExpressionStatement <: Statement {
            //  type: "ExpressionStatement";
            //  expression: Expression;
            // }

            //interface BlockStatement <: Statement {
            //  type: "BlockStatement";
            //  body: [ Statement ];
            //directives: [ Directive ];
            //}

            //interface IfStatement <: Statement {
            //  type: "IfStatement";
            //  test: Expression;
            //  consequent: Statement;
            //  alternate: Statement | null;
            //}
            node[SEEN_SYMBOL] = true;
            path.replaceWith(t.ifStatement(
              DEV_EXPRESSION,
              t.blockStatement([
                t.expressionStatement(
                  node
                ),
              ])
            ));
          }
        },
      },
    },
  };
};
