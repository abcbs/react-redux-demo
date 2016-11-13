import React, { Component, PropTypes, Children } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import NotFoundPage from './NotFoundPage'
import NavMain from './NavMain'
import classnames from 'classnames';
import '../../todomvc/css/index.css'
export default class AbcPage extends Component {
    getChildContext() {

    }
    constructor(props, context) {
        super(props, context);

    }

    rederChildren(children){
        if(React.Children.count(children)===1){
            return Children.only(children);
        }else{
             return (<NotFoundPage subTitle="多个子元素目前不支持" />)
        }
    }
    render() {
        const { children,router,title, subTitle,theme,...other} = this.props;
        return (
            <span {...other}>
                <NavMain activePage={router} />
                <PageHeader title={title}  subTitle={subTitle}  />
                {this.rederChildren(children)}
                  <PageFooter />
            </span>
        )
    }
    //
    // getDefaultProps() {
    //     return {
    //         router:'app',
    //         title:"ABC",
    //         theme:"marginPageTop"
    //     };
    // }
}
AbcPage.defaultProps={
    router:'app',
    title:"ABC",
    theme:"marginPageTop"
}

AbcPage.propTypes = {
    router:PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    theme:PropTypes.string,
    children: PropTypes.element.isRequired
}
AbcPage.childContextTypes = {

}
