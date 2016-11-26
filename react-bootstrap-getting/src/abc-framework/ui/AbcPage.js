import React, { Component, PropTypes, Children } from 'react'
import PageFooter from './AbcPageFooter'
import PageHeader from './AbcPageHeader'
import NotFoundPage from './AbcNotFoundPage'
import NavMain from './AbcNavMain'
import classnames from 'classnames';
import  '../../../resource/styles/css/index.css'
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
        // require( '../../../resource/styles/css/index.css')
        const { children,router,title, subTitle,theme,...other} = this.props;
        return (
            <span {...other}>
                 <p>&nbsp;</p><p>&nbsp;</p>
                 <PageHeader title={title}  subTitle={subTitle}  />
                    {this.rederChildren(children)}
                  <PageFooter />
            </span>
        )
    }
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
