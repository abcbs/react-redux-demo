/*!
 * Module dependencies.
 */

var EventEmitter = require('events').EventEmitter;
var Schema = require('./schema');
var hooks = require('../../external/hooks-fixed-promised-1.2.0/hooks');

Document.prototype._doc;
Document.prototype._response;

function Document(obj, fields, skipId) {

  this.isNew = true;
  this._doc=obj;
  this.errors = undefined;

  var schema = this.schema;

  this.$__registerHooksFromSchema();
}

Document.prototype.constructor = Document;


/*!
 * Set up middleware support
 */
//加入钩子方法
for (var k in hooks) {
  if (k === 'pre' || k === 'post') {
    Document.prototype['$' + k] = Document['$' + k] = hooks[k];
  } else {
    Document.prototype[k] = Document[k] = hooks[k];
  }
}

Document.prototype.$__setSchema = function(schema) {
  this.schema = schema;
};


Document.prototype.$__registerHooksFromSchema = function() {//hookes
  var _this = this;
  //Schema中的执行队列
  var q = _this.schema && _this.schema.callQueue;
  if (!q.length) {
    return _this;
  }
  // we are only interested in 'pre' hooks, and group by point-cut
  //reduce(callbackfn[, initialValue])
  //callbackfn(previousValue, currentValue)
  var toWrap = q.reduce(function(seed, pair) {
    if (pair[0] !== 'pre' && pair[0] !== 'post' && pair[0] !== 'on') {
      _this[pair[0]].apply(_this, pair[1]);//如果不是上面三个值，则执行它
      return seed;
    }
    var args = [].slice.call(pair[1]);
    var pointCut = pair[0] === 'on' ? 'post' : args[0];
    if (!(pointCut in seed)) {
      seed[pointCut] = {post: [], pre: []};
    }
    if (pair[0] === 'post') {
      seed[pointCut].post.push(args);
    } else if (pair[0] === 'on') {
      seed[pointCut].push(args);
    } else {
      seed[pointCut].pre.push(args);
    }
    return seed;
  }, {
    post: []}
  );

  // 'post' hooks are simpler
  toWrap.post.forEach(function(args) {
    _this.on.apply(_this, args);
  });
  delete toWrap.post;

  // 'init' should be synchronous on subdocuments
  if (toWrap.init && _this instanceof Embedded) {
    if (toWrap.init.pre) {
      toWrap.init.pre.forEach(function(args) {
        _this.$pre.apply(_this, args);
      });
    }
    if (toWrap.init.post) {
      toWrap.init.post.forEach(function(args) {
        _this.$post.apply(_this, args);
      });
    }
    delete toWrap.init;
  } else if (toWrap.set) {
    // Set hooks also need to be sync re: gh-3479
    if (toWrap.set.pre) {
      toWrap.set.pre.forEach(function(args) {
        _this.$pre.apply(_this, args);
      });
    }
    if (toWrap.set.post) {
      toWrap.set.post.forEach(function(args) {
        _this.$post.apply(_this, args);
      });
    }
    delete toWrap.set;
  }

  Object.keys(toWrap).forEach(function(pointCut) {
    // this is so we can wrap everything into a promise;
    var newName = ('$__original_' + pointCut);
    if (!_this[pointCut]) {
      return;
    }
    _this[newName] = _this[pointCut];
    _this[pointCut] = function wrappedPointCut() {
      var args = [].slice.call(arguments);
      var lastArg = args.pop();
      var fn;
      var originalStack = new Error().stack;
      var $results;
      if (lastArg && typeof lastArg !== 'function') {
        args.push(lastArg);
      } else {
        fn = lastArg;
      }

      var promise = new Promise(function(resolve, reject) {
        args.push(function(error) {
          if (error) {
            reject(error);
            return;
          }
          $results = Array.prototype.slice.call(arguments, 1);
          resolve.apply(promise, $results);
        });

        _this[newName].apply(_this, args);
      });
      if (fn) {
        if (_this.constructor.$wrapCallback) {
          fn = _this.constructor.$wrapCallback(fn);
        }
        return promise.then(
          function() {
            process.nextTick(function() {
              fn.apply(null, [null].concat($results));
            });
          },
          function(error) {
            process.nextTick(function() {
              fn(error);
            });
          });
      }
      return promise;
    };

    toWrap[pointCut].pre.forEach(function(args) {
      args[0] = newName;
      _this.$pre.apply(_this, args);
    });
    toWrap[pointCut].post.forEach(function(args) {
      args[0] = newName;
      _this.$post.apply(_this, args);
    });
  });
  return _this;
};

Document.prototype.$__handleReject = function handleReject(err) {
  if (this.listeners('error').length) {
    this.emit('error', err);
    this.constructor.emit('error', err);
  } else if (this.listeners && this.listeners('error').length) {
    this.emit('error', err);
  }
};
Document.prototype.validate = function(options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = null;
  }
  callback();

};

module.exports = exports = Document;
