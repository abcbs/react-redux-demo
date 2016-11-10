import React from 'react';
import NavMain from './NavMain';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import {Label, Glyphicon,Grid,Panel} from 'react-bootstrap'
const IntroductionPage = React.createClass({
    render() {
        return (
            <p>
                <NavMain activePage="introduction" />

                <PageHeader
                    title="Introduction"
                    subTitle="The most popular front-end framework, rebuilt for React."/>

                <div className="container">
                      
                </div>
                <PageFooter />
                </p>
        );
    }
});

export default IntroductionPage;
