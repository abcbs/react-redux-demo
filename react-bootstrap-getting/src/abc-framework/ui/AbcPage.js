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
        return children;
    }
    render() {
        // require( '../../../resource/styles/css/index.css')
        const { children,router,title, subTitle,theme,...other} = this.props;
        return (
            <span {...other}>
                 <div style={{marginBottom:"10px" ,marginTop:"60px" }}/>
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
