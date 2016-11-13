import React, { Component, PropTypes, Children } from 'react'

import NavMain from './NavMain';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';

import {Label, Glyphicon,Grid,Panel} from 'react-bootstrap'
const NotFoundPage = React.createClass({
    render() {
        return (
            <span>
                <NavMain activePage="" />
                <PageHeader
                    title="404"
                    subTitle={this.props.subTitle} />

                <PageFooter />
            </span>
        );
    }
});

NotFoundPage.propTypes = {
    code: PropTypes.string,
    subTitle: PropTypes.string,
    message:PropTypes.string,
}

NotFoundPage.defaultProps={
    subTitle:"ABC-Error"
}

export default NotFoundPage;
