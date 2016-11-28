import App from '../../todos/containers/App';
import NotFoundPage from '../ui/AbcNotFoundPage'

const NAV_LINKS = {
    App: {
        path: '/',
        nav:'/app/:filter',
        title: '主页',
        subTitle:"ABC主页可配置",
        // subLink:[App,IntroductionPage,HomePage],
        role:"public"
    },
    IntroductionPage: {
        path: '/introduct',
        nav:'/introduct',
        title: '信息查询',
        subTitle:"介绍ABC内容",
        role:"private"
    },
    HomePage: {
        path: '/home',
        nav:'/home',
        title: '介绍',
        subTitle:"介绍ABC内容",
        role:"needLogined"
    },
};

export default NAV_LINKS;