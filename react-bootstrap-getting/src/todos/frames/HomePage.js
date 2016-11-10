import React from 'react';

import NavMain from './NavMain';
import PageFooter from './PageFooter';

import {Label, Glyphicon,Grid,Panel} from 'react-bootstrap'

export default class HomePage extends React.Component {
    render() {
        return (
            <p>
                <NavMain activePage="home" />
                <div className="container">
                    <p>
                        The most popular front-end framework, rebuilt for React.
                        The most popular front-end framework, rebuilt for React.
                        The most popular front-end framework, rebuilt for React.
                    </p>
                </div>
                <PageFooter />
                </p>
        );
    }
}
