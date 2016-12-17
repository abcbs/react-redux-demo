import React, { PropTypes } from 'react'
import classNames           from 'classnames'

export default class AbcRightLGPage extends React.Component
{
    static propTypes =
    {
        bsStyle : PropTypes.string,
        bsSize :PropTypes.string,
    }

    static defaultProps =
    {
        bsStyle : "abc",
        bsSize :"bg",
    }
    render()
    {
        return (  <div className="container"
                       style={{minHeight:"50px",  marginTop:"60px"}}><p>test</p>
            </div>);
    }
}