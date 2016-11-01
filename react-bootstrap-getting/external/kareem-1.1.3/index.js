'use strict';

function Kareem() {
  this._pres = {};
  this._posts = {};
}


Kareem.prototype.pre = function(name, isAsync, fn, error) {
  if (typeof arguments[1] !== 'boolean') {
    error = fn;
    fn = isAsync;
    isAsync = false;
  }

  this._pres[name] = this._pres[name] || [];
  var pres = this._pres[name];

  if (isAsync) {
    pres.numAsync = pres.numAsync || 0;
    ++pres.numAsync;
  }

  pres.push({ fn: fn, isAsync: isAsync });

  return this;
};

Kareem.prototype.execPre = function(name, context, callback) {
  var pres = this._pres[name] || [];
  var numPres = pres.length;
  var numAsyncPres = pres.numAsync || 0;
  var currentPre = 0;
  var asyncPresLeft = numAsyncPres;
  var done = false;

  if (!numPres) {
    return process.nextTick(function() {
      callback(null);
    });
  }

  var next = function() {//
    if (currentPre >= numPres) {
      return;
    }
    var pre = pres[currentPre];

    if (pre.isAsync) {
      pre.fn.call(
        context,
        function(error) {//pre.isAsync-1
          if (error) {
            if (done) {
              return;
            }
            done = true;
            return callback(error);
          }

          ++currentPre;
          next.apply(context, arguments);
        },
        function(error) {//pre.isAsync-2
          if (error) {
            if (done) {
              return;
            }
            done = true;
            return callback(error);
          }

          if (--numAsyncPres === 0) {
            return callback(null);
          }
        });
    } else if (pre.fn.length > 0) {
      var args = [function(error) {
        if (error) {
          if (done) {
            return;
          }
          done = true;
          return callback(error);
        }

        if (++currentPre >= numPres) {
          if (asyncPresLeft > 0) {
            // Leave parallel hooks to run
            return;
          } else {
            return callback(null);
          }
        }

        next.apply(context, arguments);
      }];
      if (arguments.length >= 2) {
        for (var i = 1; i < arguments.length; ++i) {
          args.push(arguments[i]);
        }
      }
      pre.fn.apply(context, args);
    } else {
      pre.fn.call(context);
      if (++currentPre >= numPres) {
        if (asyncPresLeft > 0) {
          // Leave parallel hooks to run
          return;
        } else {
          return process.nextTick(function() {
            callback(null);
          });
        }
      }
      next();
    }
  };
  //execPre.next
  next();
};

Kareem.prototype.post = function(name, fn) {
  (this._posts[name] = this._posts[name] || []).push(fn);
  return this;
};


Kareem.prototype.execPost = function(name, context, args, options, callback) {
  if (arguments.length < 5) {//参数小于
    callback = options;
    options = null;
  }
  var posts = this._posts[name] || [];
  var numPosts = posts.length;
  var currentPost = 0;

  var firstError = null;
  //第四个参数为error
  if (options && options.error) {
    firstError = options.error;
  }

  if (!numPosts) {
    return process.nextTick(function() {
      callback.apply(null, [firstError].concat(args));
    });
  }

  var next = function() {
    //获取添加的方法
    var post = posts[currentPost];

    if (firstError) {//如果存在异常
      //如果传入方法参数的长度为args长度+2时
      //执行第一个为error,最后一个为error的回调方法
      if (post.length === args.length + 2) {
        post.apply(context, [firstError].concat(args).concat(function(error) {
          if (error) {
            firstError = error;
          }
          if (++currentPost >= numPosts) {//第一个参数应当为error
            return callback.call(null, firstError);
          }
          next();
        }));
      } else {
        if (++currentPost >= numPosts) {//第一个参数应当为error
          return callback.call(null, firstError);
        }
        next();
      }
    } else {//如果不存在异常
      if (post.length === args.length + 2) {//回调函数比参数多两个
        // Skip error handlers if no error
        if (++currentPost >= numPosts) {//第一个参数应当为error
          return callback.apply(null, [null].concat(args));
        }
        return next();//执行
      }
      if (post.length === args.length + 1) {//参数为长度加1
        post.apply(context, args.concat(function(error) {//在参数尾部添加异常处理函数，
          // 如果有异常在把firstError设置为error
          if (error) {
            firstError = error;
            return next();
          }

          if (++currentPost >= numPosts) {//第一个参数应当为error
            return callback.apply(null, [null].concat(args));
          }

          next();
        }));
      } else {//
        //args和post参数个数一样
        post.apply(context, args);

        if (++currentPost >= numPosts) {//执行统一的回调，即callback
          return callback.apply(null, [null].concat(args));//第一个参数应当为error
        }

        next();
      }
    }
  };
  //execPost.next
  next();
};


Kareem.prototype.execPreSync = function(name, context) {
  var pres = this._pres[name] || [];
  var numPres = pres.length;

  for (var i = 0; i < numPres; ++i) {
    pres[i].fn.call(context);
  }
};

Kareem.prototype.execPostSync = function(name, context) {
  var posts = this._posts[name] || [];
  var numPosts = posts.length;

  for (var i = 0; i < numPosts; ++i) {
    posts[i].call(context);
  }
};

function _handleWrapError(instance, error, name, context, args, options, callback) {
  if (options.useErrorHandlers) {
    var _options = { error: error };
    var newArgs = [];
    // Filter out trailing undefineds
    for (var i = args.length; i >= 0; --i) {
      if (newArgs.length > 0 || args[i] !== void 0) {
        newArgs.unshift(args[i]);
      }
    }
    return instance.execPost(name, context, newArgs, _options, function(error) {
      return typeof callback === 'function' && callback(error);
    });
  } else {
    return typeof callback === 'function' ?
      callback(error) :
      undefined;
  }
}

Kareem.prototype.wrap = function(name, fn, context, args, options) {
  var lastArg = (args.length > 0 ? args[args.length - 1] : null);
  var argsWithoutCb = typeof lastArg === 'function' ?
    args.slice(0, args.length - 1) :
    args;
  var _this = this;

  var useLegacyPost;
  if (typeof options === 'object') {
    useLegacyPost = options && options.useLegacyPost;
  } else {
    useLegacyPost = options;
  }
  options = options || {};

  this.execPre(name, context, function(error) {
    if (error) {
      return _handleWrapError(_this, error, name, context, argsWithoutCb,
        options, lastArg)
    }

    var end = (typeof lastArg === 'function' ? args.length - 1 : args.length);

    fn.apply(context, args.slice(0, end).concat(function() {
      var args = arguments;
      var argsWithoutError = Array.prototype.slice.call(arguments, 1);
      if (arguments[0]) {
        // Assume error
        return _handleWrapError(_this, arguments[0], name, context,
          args, options, lastArg);
      } else {
        if (useLegacyPost && typeof lastArg === 'function') {
          lastArg.apply(context, arguments);
        }

        _this.execPost(name, context, argsWithoutError, function() {
          if (arguments[0]) {
            return typeof lastArg === 'function' ?
              lastArg(arguments[0]) :
              undefined;
          }

          return typeof lastArg === 'function' && !useLegacyPost ?
            lastArg.apply(context, arguments) :
            undefined;
        });
      }
    }));
  });
};

Kareem.prototype.createWrapper = function(name, fn, context, options) {
  var _this = this;
  return function() {
    var args = Array.prototype.slice.call(arguments);
    _this.wrap(name, fn, context, args, options);
  };
};

Kareem.prototype.clone = function() {
  var n = new Kareem();
  for (var key in this._pres) {
    n._pres[key] = this._pres[key].slice();
  }
  for (var key in this._posts) {
    n._posts[key] = this._posts[key].slice();
  }

  return n;
};

module.exports = Kareem;
