import React from 'react';
import {ControlLabel} from '../../abc-bootstrap'

const PageHeader = React.createClass({
    render() {
        return (
            <div className="container">
                <ControlLabel style={{lineHeight:'40px'}}>{this.props.title}</ControlLabel>
                 <span >{this.props.subTitle}</span>
                 <div style={{marginBottom:"20px"}}/>
            </div>
        );
    }
});

export default PageHeader;
