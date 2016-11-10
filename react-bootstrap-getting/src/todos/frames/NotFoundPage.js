import React from 'react';

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
                    subTitle="Hmmm this is awkward." />

                <PageFooter />
            </span>
        );
    }
});

export default NotFoundPage;
