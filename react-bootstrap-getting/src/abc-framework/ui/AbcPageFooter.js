import React from 'react';
import {Navbar} from '../../abc-bootstrap'

const PageFooter = React.createClass({
    render() {
        return (
            <Navbar fixedBottom className="container container-desktop container-lg">
                     <p>ABC right</p>
            </Navbar>
        );
    }
});

export default PageFooter;
