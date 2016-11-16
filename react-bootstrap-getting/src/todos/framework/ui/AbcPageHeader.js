import React from 'react';
import {ControlLabel} from 'react-bootstrap'

const PageHeader = React.createClass({
    render() {
        return (
            <div className="container">
                <ControlLabel style={{lineHeight:'40px'}}>{this.props.title}</ControlLabel>
                 <span>{this.props.subTitle}</span>
            </div>
        );
    }
});

export default PageHeader;
