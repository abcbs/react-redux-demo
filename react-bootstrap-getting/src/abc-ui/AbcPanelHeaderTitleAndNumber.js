import React, { PropTypes } from 'react'
import classNames           from 'classnames'
import {AbcBadge} from './abc-ui-index'
import  '../../resource/styles/css/index.css'

export default class AbcPanelHeaderTitleAndNumber extends React.Component
{
    //<Badge bsStyle="info" bsSize="abc">
    static propTypes =
    {
        numbers : PropTypes.number,
        title :PropTypes.string,
    }

    static defaultProps =
    {
        numbers : 0,
        title :"abc",
    }
    render()
    {
        const badge=(
        <div className="todo">
            <label>{this.props.title}</label>
            <AbcBadge style={{float:"right"}}>{this.props.numbers}</AbcBadge>
        </div>
    )
        return badge;
    }
}