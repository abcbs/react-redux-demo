'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._curry = exports.bsSizes = exports.bsStyles = exports.bsClass = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

exports.prefix = prefix;
exports.getClassSet = getClassSet;
exports.splitBsProps = splitBsProps;
exports.splitBsPropsAndOmit = splitBsPropsAndOmit;
exports.addStyle = addStyle;

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _react = require('react');

var _StyleConfig = require('./StyleConfig');

var _values3 = require('lodash/values');

var _values4 = _interopRequireDefault(_values3);

var _entries3 = require('lodash/entries');

var _entries4 = _interopRequireDefault(_entries3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

Object.values = _values2['default'] || _values4['default'];
Object.entries = _entries2['default'] || _entries4['default'];

function curry(fn) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var last = args[args.length - 1];
    if (typeof last === 'function') {
      return fn.apply(undefined, args);
    }
    return function (Component) {
      return fn.apply(undefined, args.concat([Component]));
    };
  };
}

function prefix(props, variant) {
  !(props.bsClass != null) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2['default'])(false, 'A `bsClass` prop is required for this component') : (0, _invariant2['default'])(false) : void 0;
  return props.bsClass + (variant ? '-' + variant : '');
}

var bsClass = exports.bsClass = curry(function (defaultClass, Component) {
  var propTypes = Component.propTypes || (Component.propTypes = {});
  var defaultProps = Component.defaultProps || (Component.defaultProps = {});

  propTypes.bsClass = _react.PropTypes.string;
  defaultProps.bsClass = defaultClass;

  return Component;
});

var bsStyles = exports.bsStyles = curry(function (styles, defaultStyle, Component) {
  if (typeof defaultStyle !== 'string') {
    Component = defaultStyle;
    defaultStyle = undefined;
  }

  var existing = Component.STYLES || [];
  var propTypes = Component.propTypes || {};

  styles.forEach(function (style) {
    if (existing.indexOf(style) === -1) {
      existing.push(style);
    }
  });

  var propType = _react.PropTypes.oneOf(existing);

  // expose the values on the propType function for documentation
  Component.STYLES = propType._values = existing;

  Component.propTypes = (0, _extends3['default'])({}, propTypes, {
    bsStyle: propType
  });

  if (defaultStyle !== undefined) {
    var defaultProps = Component.defaultProps || (Component.defaultProps = {});
    defaultProps.bsStyle = defaultStyle;
  }

  return Component;
});

var bsSizes = exports.bsSizes = curry(function (sizes, defaultSize, Component) {
  if (typeof defaultSize !== 'string') {
    Component = defaultSize;
    defaultSize = undefined;
  }

  var existing = Component.SIZES || [];
  var propTypes = Component.propTypes || {};

  sizes.forEach(function (size) {
    if (existing.indexOf(size) === -1) {
      existing.push(size);
    }
  });

  var values = [];
  existing.forEach(function (size) {
    var mappedSize = _StyleConfig.SIZE_MAP[size];
    if (mappedSize && mappedSize !== size) {
      values.push(mappedSize);
    }

    values.push(size);
  });

  var propType = _react.PropTypes.oneOf(values);
  propType._values = values;

  // expose the values on the propType function for documentation
  Component.SIZES = existing;

  Component.propTypes = (0, _extends3['default'])({}, propTypes, {
    bsSize: propType
  });

  if (defaultSize !== undefined) {
    if (!Component.defaultProps) {
      Component.defaultProps = {};
    }
    Component.defaultProps.bsSize = defaultSize;
  }

  return Component;
});

function getClassSet(props) {
  var classes = (0, _defineProperty3['default'])({}, prefix(props), true);

  if (props.bsSize) {
    var bsSize = _StyleConfig.SIZE_MAP[props.bsSize] || props.bsSize;
    classes[prefix(props, bsSize)] = true;
  }

  if (props.bsStyle) {
    classes[prefix(props, props.bsStyle)] = true;
  }

  return classes;
}

function getBsProps(props) {
  return {
    bsClass: props.bsClass,
    bsSize: props.bsSize,
    bsStyle: props.bsStyle,
    bsRole: props.bsRole
  };
}
//Bootstap的四个属性
function isBsProp(propName) {
  return propName === 'bsClass' || propName === 'bsSize' || propName === 'bsStyle' || propName === 'bsRole';
}

function splitBsProps(props) {
  var elementProps = {};
  (0, _entries2['default'])(props).forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray3['default'])(_ref, 2);

    var propName = _ref2[0];
    var propValue = _ref2[1];

    if (!isBsProp(propName)) {
      elementProps[propName] = propValue;
    }
  });

  return [getBsProps(props), elementProps];
}

function splitBsPropsAndOmit(props, omittedPropNames) {
  var isOmittedProp = {};
  omittedPropNames.forEach(function (propName) {
    isOmittedProp[propName] = true;
  });

  var elementProps = {};
  (0, _entries2['default'])(props).forEach(function (_ref3) {
    var _ref4 = (0, _slicedToArray3['default'])(_ref3, 2);

    var propName = _ref4[0];
    var propValue = _ref4[1];

    if (!isBsProp(propName) && !isOmittedProp[propName]) {
      elementProps[propName] = propValue;
    }
  });

  return [getBsProps(props), elementProps];
}

function addStyle(Component) {
  for (var _len2 = arguments.length, styleVariant = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    styleVariant[_key2 - 1] = arguments[_key2];
  }

  bsStyles(styleVariant, Component);
}

var _curry = exports._curry = curry;