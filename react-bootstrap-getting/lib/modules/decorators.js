"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function testable(target) {
    target.isTestable = true;
}

var MyTestableClass = testable(_class = function MyTestableClass() {
    _classCallCheck(this, MyTestableClass);
}) || _class;

console.log("MyTestableClass,", MyTestableClass.isTestable); // true

function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

function concat(arr1, arr2) {
    return arr1.concat(arr2);
}
function reducer(target) {
    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return args.reduce(target);
    };
}

var add_many = reducer(add);
var mul_many = reducer(mul);
var concat_many = reducer(concat);

/**
 * multicast包装函数
 * @param target
 * @returns {Function}
 */
function multicast(target) {
    //把参数分为两部分，第一部分为第一个元素，二部分为其余元素
    return function (list) {
        var _this = this;

        for (var _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            rest[_key2 - 1] = arguments[_key2];
        }

        if (Array.isArray(list)) {
            //遍历数组，把数组中的每个元素执行target方法
            return list.map(function (item) {
                return target.apply(_this, [item].concat(rest));
            });
        } else {
            var item = list;
            return target.apply(this, [item].concat(rest));
        }
    };
}

var Collection = function () {
    function Collection() {
        _classCallCheck(this, Collection);

        this.items = [];
    }

    _createClass(Collection, [{
        key: "append",
        value: function append(item) {
            this.items.push(item);
            return this.items.slice(-1)[0];
        }
    }]);

    return Collection;
}();

function multicastCollection(list) {
    var c = new Collection();
    c.append = multicast(c.append);
    c.append(list);

    function print(previousValue, currentValue) {
        console.log(currentValue);
    }
    function loggerPrint() {
        //splice，删除，slice不删除
        var first = void 0;
        if (Array.isArray(c.items)) {
            first = c.items.slice(0, 1)[0];
        }
        c.items.reduce(print, first);
    }
    c.loggerPrint = loggerPrint;
    return c;
}

function multicastPrint(callback) {
    function printLocal(item) {
        console.log(item);
    }
    if (!callback && typeof callback !== 'function') {
        callback = printLocal;
    }
    var prints = multicast(callback);
    return prints;
}

//使用decorator 来实现函数变换
function descriptorCollection(newItem) {
    var _desc, _value, _class2;

    var item = [];
    if (Array.isArray(newItem)) {
        item = newItem;
    } else {
        var keys = arguments;
        for (var i = 0; i < keys.length; i++) {
            item.push(keys[i]);
        }
    }
    // babel stage-1 使用 decorators 插件的情况下可以正确编译和执行。我们看到有了 decorator，
    function multicast(target, key, descriptor) {
        var func = target[key];
        descriptor.value = function (list) {
            var _this2 = this;

            for (var _len3 = arguments.length, rest = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                rest[_key3 - 1] = arguments[_key3];
            }

            if (Array.isArray(list)) {
                return list.map(function (item) {
                    return func.apply(_this2, [item].concat(rest));
                });
            } else {
                var _item = list;
                return func.apply(this, [_item].concat(rest));
            }
        };
        return descriptor;
    }

    var Collection = (_class2 = function () {
        function Collection() {
            _classCallCheck(this, Collection);

            this.items = [];
        }

        _createClass(Collection, [{
            key: "append",
            value: function append(item) {
                this.items.push(item);
                return this.items.slice(-1)[0];
            }
        }]);

        return Collection;
    }(), (_applyDecoratedDescriptor(_class2.prototype, "append", [multicast], Object.getOwnPropertyDescriptor(_class2.prototype, "append"), _class2.prototype)), _class2);

    var c = new Collection();

    c.loggerPrint = function () {
        if (c.items && c.items.length > 0) {
            c.items.reduce(function (previousValue, currentValue) {
                console.log(currentValue);
            }, c.items.slice(0, 1)[0]);
        }
    };
    c.appendItem = function (item) {
        c.append(item);
    };
    c.append(item);
    return c;
}
//一个 decorator 是一个函数，它有三个参数，第一个是被 decorator 修饰的对象，第二个是属性名，
// 第三个参数是 Object.defineProperty 的 descriptor，有了这些参数，我们就可以在定义时，对它进行各种“修饰”。
function deprecateSimpleMyClass() {
    var _desc2, _value2, _class3;

    function deprecate(target, key, descriptor) {
        console.log("[Function " + key + "] has been deprecated.");
        return descriptor;
    }

    var MyClass = (_class3 = function () {
        function MyClass() {
            _classCallCheck(this, MyClass);
        }

        _createClass(MyClass, [{
            key: "old_method",
            value: function old_method() {
                console.log("I\"m deprecated");
            }
        }]);

        return MyClass;
    }(), (_applyDecoratedDescriptor(_class3.prototype, "old_method", [deprecate], Object.getOwnPropertyDescriptor(_class3.prototype, "old_method"), _class3.prototype)), _class3);


    var a = new MyClass();
    return a;
}

//decorator 可以带参数，方法是在 decorator 函数定义的时候嵌套一层：
function decoratorParamMyClass() {
    var _dec, _desc3, _value3, _class4;

    function deprecate(target, key, descriptor) {
        console.log("[Function " + key + "] has been deprecated.");
        return descriptor;
    }

    function delay(ms) {
        return function (target, key, descriptor) {
            var func = target[key];
            descriptor.value = function () {
                for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                    args[_key4] = arguments[_key4];
                }

                return setTimeout(function () {
                    func.apply(target, args);
                }, ms);
            };
        };
    }
    var MyClass = (_dec = delay(3000), (_class4 = function () {
        function MyClass() {
            _classCallCheck(this, MyClass);
        }

        _createClass(MyClass, [{
            key: "old_method",
            value: function old_method() {
                console.log("I\"m deprecated");
            }
        }, {
            key: "new_method",
            value: function new_method() {
                console.log("I\"m called after 3000ms");
            }
        }]);

        return MyClass;
    }(), (_applyDecoratedDescriptor(_class4.prototype, "old_method", [deprecate], Object.getOwnPropertyDescriptor(_class4.prototype, "old_method"), _class4.prototype), _applyDecoratedDescriptor(_class4.prototype, "new_method", [_dec], Object.getOwnPropertyDescriptor(_class4.prototype, "new_method"), _class4.prototype)), _class4));

    var a = new MyClass();
    return a;
}

function decoratorMult(item) {
    var _desc4, _value4, _class5;

    function expand(target, key, descriptor) {
        var func = target[key];
        target[key] = function () {
            for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                args[_key5] = arguments[_key5];
            }

            return func.call(this, args);
        };

        return target[key];
    }

    function multicast(target, key, descriptor) {
        var func = target[key];
        target[key] = function (list) {
            var _this3 = this;

            for (var _len6 = arguments.length, rest = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
                rest[_key6 - 1] = arguments[_key6];
            }

            if (Array.isArray(list)) {
                return list.map(function (item) {
                    return func.apply(_this3, [item].concat(rest));
                });
            } else {
                var _item2 = list;
                return func.apply(this, [_item2].concat(rest));
            }
        };
        return target[key];
    }

    var Collection = (_class5 = function () {
        function Collection() {
            _classCallCheck(this, Collection);

            this.items = [];
        }

        _createClass(Collection, [{
            key: "append",
            value: function append(item) {
                this.items.push(item);
                return this.items.slice(-1)[0];
            }
        }]);

        return Collection;
    }(), (_applyDecoratedDescriptor(_class5.prototype, "append", [expand, multicast], Object.getOwnPropertyDescriptor(_class5.prototype, "append"), _class5.prototype)), _class5);


    var c = new Collection();
    c.loggerPrint = function () {
        if (c.items && c.items.length > 0) {
            c.items.reduce(function (previousValue, currentValue) {
                console.log(currentValue);
            }, c.items.slice(0, 1)[0]);
        }
    };
    c.append(item);
    return c;
}

//与一般的函数变换相比，decorator 有更优雅的语法，
// 但是 decorator 目前不能针对一般的函数进行变换，只能针对类的方法，这一块不如普通函数变换灵活。
//promisify
function promisifySimple(url) {
    var request = require("request");
    //request('http://www.google.com', function (error, response, body) {
    // if (!error && response.statusCode == 200) {
    //     console.log(body) // Show the HTML for the Google homepage.
    // }
    // })
    function promisify(func) {
        return function () {
            var _this4 = this;

            for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
                args[_key7] = arguments[_key7];
            }

            return new Promise(function (resolve, reject) {
                args.push(function (err) {
                    if (!err) {
                        for (var _len8 = arguments.length, args = Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
                            args[_key8 - 1] = arguments[_key8];
                        }

                        resolve(args);
                    } else {
                        reject(err);
                    }
                });
                func.apply(_this4, args);
            });
        };
    }

    var getData = promisify(request);
    var _url = "http://www.baidu.com";
    if (url && typeof url === 'string') {
        _url = url;
    }
    return getData(_url);
}
function decoratorPromisify(url) {
    var _desc5, _value5, _class6;

    var request = require("request");

    function promisify(target, key, descriptor) {
        var func = target[key];

        target[key] = function () {
            var _this5 = this;

            for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
                args[_key9] = arguments[_key9];
            }

            return new Promise(function (resolve, reject) {
                args.push(function (err) {
                    if (!err) {
                        for (var _len10 = arguments.length, args = Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
                            args[_key10 - 1] = arguments[_key10];
                        }

                        resolve(args);
                    } else {
                        reject(err);
                    }
                });
                func.apply(_this5, args);
            });
        };
        return target[key];
    }

    var Site = (_class6 = function () {
        function Site(url) {
            _classCallCheck(this, Site);

            this.url = url;
        }

        _createClass(Site, [{
            key: "getData",
            value: function getData(callback) {
                request(this.url, callback);
            }
        }]);

        return Site;
    }(), (_applyDecoratedDescriptor(_class6.prototype, "getData", [promisify], Object.getOwnPropertyDescriptor(_class6.prototype, "getData"), _class6.prototype)), _class6);

    var _url = "http://www.baidu.com";
    if (url && typeof url === 'string') {
        _url = url;
    }
    var baidu = new Site(_url);
    return baidu.getData();
}
//decorator 可以操作 Object.defineProperty 的 descriptor，因此可以用来做一些函数变换范围之外的事情：
function decoratorReadonly() {
    var _desc6, _value6, _class7;

    function readonly(target, key, descriptor) {
        descriptor.writable = false;
        return descriptor;
    }

    var Foo = (_class7 = function () {
        function Foo() {
            _classCallCheck(this, Foo);
        }

        _createClass(Foo, [{
            key: "bar",
            value: function bar() {
                console.log(1);
            }
        }]);

        return Foo;
    }(), (_applyDecoratedDescriptor(_class7.prototype, "bar", [readonly], Object.getOwnPropertyDescriptor(_class7.prototype, "bar"), _class7.prototype)), _class7);

    var foo = new Foo();
    return foo;
}
//decorator 不仅能修饰函数，还可以修饰类，我们对上面的代码进行修改
function decoratorClassPromisify(newUrl) {
    var _desc7, _value7, _class8, _dec2, _class9;

    var request = require("request");

    function promisify(target, key, descriptor) {
        var func = target[key];

        target[key] = function () {
            var _this6 = this;

            for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
                args[_key11] = arguments[_key11];
            }

            return new Promise(function (resolve, reject) {
                args.push(function (err) {
                    if (!err) {
                        for (var _len12 = arguments.length, args = Array(_len12 > 1 ? _len12 - 1 : 0), _key12 = 1; _key12 < _len12; _key12++) {
                            args[_key12 - 1] = arguments[_key12];
                        }

                        resolve(args);
                    } else {
                        reject(arr);
                    }
                });
                func.apply(_this6, args);
            });
        };

        return target[key];
    }

    function url(url) {
        return function (Site) {
            Site.prototype.url = url;
            return Site;
        };
    }

    var Site = (_class8 = function () {
        function Site() {
            _classCallCheck(this, Site);
        }

        _createClass(Site, [{
            key: "getData",
            value: function getData(callback) {
                request(this.url, callback);
            }
        }]);

        return Site;
    }(), (_applyDecoratedDescriptor(_class8.prototype, "getData", [promisify], Object.getOwnPropertyDescriptor(_class8.prototype, "getData"), _class8.prototype)), _class8);

    //

    var _url = "http://www.baidu.com";
    if (newUrl && typeof newUrl === 'string') {
        _url = newUrl;
    }
    var Baidu = (_dec2 = url(_url), _dec2(_class9 = function (_Site) {
        _inherits(Baidu, _Site);

        function Baidu() {
            _classCallCheck(this, Baidu);

            return _possibleConstructorReturn(this, (Baidu.__proto__ || Object.getPrototypeOf(Baidu)).apply(this, arguments));
        }

        return Baidu;
    }(Site)) || _class9);


    var baidu = new Baidu();
    console.log(baidu.url);
    return baidu.getData();
}

// 函数变换 与 decorator 可以相互转换，我们写一个一般的方法来做转换
function decoratorClassPromisifyWithWrapper(newUrl) {
    var _desc8, _value8, _class10, _dec3, _dec4, _class11;

    var request = require("request");

    function wrapperToDecorator(wrapper) {
        if (wrapper.length <= 1) {
            return function (target, key, descriptor) {
                target[key] = wrapper.call(this, target[key]);
                return target[key];
            };
        } else {
            return function () {
                for (var _len13 = arguments.length, args = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
                    args[_key13] = arguments[_key13];
                }

                return function (target, key, descriptor) {
                    target[key] = wrapper.apply(this, [target[key]].concat(args));
                };
            };
        }
    }

    function promisify(func) {
        return function () {
            var _this8 = this;

            for (var _len14 = arguments.length, args = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
                args[_key14] = arguments[_key14];
            }

            return new Promise(function (resolve, reject) {
                args.push(function (err) {
                    if (!err) {
                        for (var _len15 = arguments.length, args = Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
                            args[_key15 - 1] = arguments[_key15];
                        }

                        resolve(args);
                    } else {
                        reject(arr);
                    }
                });
                func.apply(_this8, args);
            });
        };
    }

    promisify = wrapperToDecorator(promisify);

    function url(url) {
        return function (Site) {
            Site.prototype.url = url;
            return Site;
        };
    }

    var Site = (_class10 = function () {
        function Site() {
            _classCallCheck(this, Site);
        }

        _createClass(Site, [{
            key: "getData",
            value: function getData(callback) {
                request(this.url, callback);
            }
        }]);

        return Site;
    }(), (_applyDecoratedDescriptor(_class10.prototype, "getData", [promisify], Object.getOwnPropertyDescriptor(_class10.prototype, "getData"), _class10.prototype)), _class10);
    //

    var _url = "http://www.baidu.com";
    if (newUrl && typeof newUrl === 'string') {
        _url = newUrl;
    }
    var Baidu = (_dec3 = url(_url), _dec4 = url("http://www.baidu.com"), _dec3(_class11 = _dec4(_class11 = function (_Site2) {
        _inherits(Baidu, _Site2);

        function Baidu() {
            _classCallCheck(this, Baidu);

            return _possibleConstructorReturn(this, (Baidu.__proto__ || Object.getPrototypeOf(Baidu)).apply(this, arguments));
        }

        return Baidu;
    }(Site)) || _class11) || _class11);

    var baidu = new Baidu();
    console.log(baidu.url);
    return baidu.getData();
}

//
function decorateArmour() {
    var _desc9, _value9, _class12;

    function decorateArmour(target, key, descriptor) {
        var method = descriptor.value;
        var moreDef = 100;
        var ret = void 0;
        descriptor.value = function () {
            for (var _len16 = arguments.length, args = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
                args[_key16] = arguments[_key16];
            }

            args[0] += moreDef;
            ret = method.apply(target, args);
            return ret;
        };
        return descriptor;
    }

    var Man = (_class12 = function () {
        function Man() {
            var def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
            var atk = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
            var hp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

            _classCallCheck(this, Man);

            this.init(def, atk, hp);
        }

        _createClass(Man, [{
            key: "init",
            value: function init(def, atk, hp) {
                this.def = def; // 防御值
                this.atk = atk; // 攻击力
                this.hp = hp; // 血量
            }
        }, {
            key: "toString",
            value: function toString() {
                return "\u9632\u5FA1\u529B:" + this.def + ",\u653B\u51FB\u529B:" + this.atk + ",\u8840\u91CF:" + this.hp;
            }
        }]);

        return Man;
    }(), (_applyDecoratedDescriptor(_class12.prototype, "init", [decorateArmour], Object.getOwnPropertyDescriptor(_class12.prototype, "init"), _class12.prototype)), _class12);


    var tony = new Man();

    console.log("\u5F53\u524D\u72B6\u6001 ===> " + tony);
    // 输出：当前状态 ===> 防御力:102,攻击力:3,血量:3
}
module.exports = {
    add_many: add_many,
    mul_many: mul_many,
    concat_many: concat_many,
    multicastCollection: multicastCollection,
    multicastPrint: multicastPrint,
    descriptorCollection: descriptorCollection,
    deprecateSimpleMyClass: deprecateSimpleMyClass,
    decoratorParamMyClass: decoratorParamMyClass,
    decoratorMult: decoratorMult,
    promisifySimple: promisifySimple,
    decoratorPromisify: decoratorPromisify,
    decoratorReadonly: decoratorReadonly,
    decoratorClassPromisify: decoratorClassPromisify,
    decoratorClassPromisifyWithWrapper: decoratorClassPromisifyWithWrapper,
    decorateArmour: decorateArmour
};