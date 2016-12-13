'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTodoVerfiy = exports.visibilityFilter = exports.todos = undefined;

var _redux = require('redux');

var _todos2 = require('./todos');

var _todos3 = _interopRequireDefault(_todos2);

var _visibilityFilter2 = require('./visibilityFilter');

var _visibilityFilter3 = _interopRequireDefault(_visibilityFilter2);

var _addTodoVerfiy2 = require('./addTodoVerfiy');

var _addTodoVerfiy3 = _interopRequireDefault(_addTodoVerfiy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports.todos = _todos3['default'];
// import reducers from '../../abc-framework/reducers'
//应用

exports.visibilityFilter = _visibilityFilter3['default'];
exports.addTodoVerfiy = _addTodoVerfiy3['default'];

// const todoApp = combineReducers({
//     ...reducers,
//     visibilityFilter,
//     addTodoVerfiy,
//     todos
// });
//
// export default todoApp