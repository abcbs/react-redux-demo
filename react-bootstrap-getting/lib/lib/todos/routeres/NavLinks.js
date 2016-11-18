'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _App = require('../containers/App');

var _App2 = _interopRequireDefault(_App);

var _AbcNotFoundPage = require('../framework/ui/AbcNotFoundPage');

var _AbcNotFoundPage2 = _interopRequireDefault(_AbcNotFoundPage);

var _IntroductionPage = require('../frames/IntroductionPage');

var _IntroductionPage2 = _interopRequireDefault(_IntroductionPage);

var _HomePage = require('../frames/HomePage');

var _HomePage2 = _interopRequireDefault(_HomePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAV_LINKS = {
    App: {
        path: '/',
        nav: '/app/:filter',
        title: '主页',
        subTitle: "ABC主页可配置",
        subLink: [_App2.default, _IntroductionPage2.default, _HomePage2.default],
        role: "public"
    },
    IntroductionPage: {
        path: '/introduct',
        nav: '/introduct',
        title: '信息查询',
        subTitle: "介绍ABC内容",
        role: "private"
    },
    HomePage: {
        path: '/home',
        nav: '/introduct',
        title: '介绍',
        subTitle: "介绍ABC内容",
        role: "needLogined"
    }
};

exports.default = NAV_LINKS;