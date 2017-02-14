import React,{ Component, createElement ,PropTypes} from 'react'
import {Field} from 'redux-form';
import classNames           from 'classnames'
import { ControlLabel, HelpBlock,FormControl,Col,
    Checkbox,ButtonToolbar,Button, Glyphicon } from '../abc-bootstrap'
import AbcCol from './AbcCol'
import AbcFormGroup from './AbcFormGroup'
import AbcFormControl from './AbcFormControl'

import AbcButton from './AbcButton'
import AbcControllerLabel from './AbcControllerLabel'
import AbcRow,{AbcRowHorizontal} from './AbcRow'
import entries from 'lodash/entries'
import keys from 'lodash/keys'
Object.entries=Object.entries||entries;
Object.keys=Object.keys||keys;

export default class AbcColReduxFormHorizontal extends React.Component
{
    static propTypes =
    {
        controlId :PropTypes.string.isRequired,
        type:PropTypes.string.isRequired,
        label:PropTypes.string,
        placeholder:PropTypes.string.isRequired,
        col:PropTypes.object,
        colLabel:PropTypes.object,
        colStyle:PropTypes.object,
        colContent:PropTypes.object,
        ref:PropTypes.string,
        data:PropTypes.string
    }

    static defaultProps =
    {
        //xs={12} xp={6} sm={6} lg={3}
        col:{xs:12,xp:6, sm:6, md:4, lg:3},
        colLabel:{ componentClass:ControlLabel,  xp:3},
        colContent:{xp:9},
        type:'text'
    }

    renderField = ({ input, controlId,label,
        type,placeholder,col,colLabel,colContent,colStyle,
        meta: { asyncValidating, touched, error,warning } }) => {
        return (
            <AbcCol {...col} colStyle={colStyle}>
                <AbcFormGroup controlId={controlId}
                              validationState={error&&error.flag||warning&&warning.flag||!error&&'success'}>
                    <AbcRow>
                        <AbcCol {...colLabel}>{label}</AbcCol>
                        <AbcCol {...colContent}>
                            <AbcFormControl  {...input}  type={type}
                                 placeholder={placeholder}
                            />
                            <AbcFormControl.Feedback />
                            <HelpBlock>
                                {touched && ((error && <span>{error.message}</span>) ||
                                (warning && <span>{warning.message}</span>))}
                            </HelpBlock>
                        </AbcCol>
                   </AbcRow>
                </AbcFormGroup>
            </AbcCol>
        )
    }

    renderFieldReadonly = ({ input, controlId,label,
        type,placeholder,col,colLabel,colContent,colStyle,
        meta: { asyncValidating, touched, error,warning },...other }) => {
        return (

            <AbcCol {...col} colStyle={colStyle}>
                <AbcRow>
                    <AbcCol {...colLabel}>{other.displayLabel&&label}</AbcCol>
                    <AbcCol {...colContent}>
                        <AbcControllerLabel
                        >{other.data||input.value}</AbcControllerLabel>
                    </AbcCol>
                </AbcRow>
            </AbcCol>
        )
    }
    render()
    {
        const {controlId,type,placeholder,name,
            label,value,  ...other} = this.props;
        if(value) {
            return <Field
                name={name}
                controlId={controlId}
                component={this.renderFieldReadonly.bind(this)}
                type={type}
                label={label}
                value={value}
                placeholder={placeholder}
                { ...other}
            />
        }
        return <Field
            name={name}
            component={other.readonly? this.renderFieldReadonly.bind(this):this.renderField.bind(this)}
            controlId={controlId}
            type={type}
            label={label}
            placeholder={placeholder}
            { ...other}
        />
    }
}

export class AbcColReduxFormImage extends React.Component{
    render() {
        //pad竖屏为sm
        //pad横屏为md
        const col={xs:9,xp:5, sm:5, md:5, lg:5};

        return (
            <AbcColReduxFormHorizontal
                col={col}
                {...this.props} />
        )
    }
}

export class AbcColReduxFormCheckbox extends AbcColReduxFormHorizontal{
    static propTypes =
    {
        controlId :PropTypes.string.isRequired,
        type:PropTypes.string.isRequired,
        label:PropTypes.string.isRequired,
        col:PropTypes.object,
        colContent:PropTypes.object,
        ref:PropTypes.string,
        checked:PropTypes.bool
    }
    static defaultProps =
    {
        //xs={12} xp={6} sm={6} lg={1}
        col:{xs:12,xp:6, sm:6, md:4, lg:1},
        // xpOffset={3} xp={9}
        colContent:{xp:9,xpOffset:3},

    }
    render(){
        const {col,colContent,controlId,name,checked,ref,
            label,value,  ...other} = this.props;
        return (
            <AbcCol {...col}>
                <AbcFormGroup controlId={controlId}>
                    <AbcRow>
                        <AbcCol {...colContent}>
                            <Checkbox controlId={controlId} name={name } ref={ref}
                                      value={value} checked={checked}>{label}</Checkbox>
                        </AbcCol>
                    </AbcRow>
                </AbcFormGroup>
            </AbcCol>
         )
    }
}

export class AbcColReduxFormButtons extends AbcColReduxFormHorizontal{
    static propTypes =
    {
        controlId :PropTypes.string.isRequired,
        type:PropTypes.string.isRequired,
        label:PropTypes.string.isRequired,
        col:PropTypes.object,
        colContent:PropTypes.object,
        ref:PropTypes.string
    }
    static defaultProps =
    {
        col:{xs:12,xp:6, sm:6, md:4, lg:3},
        colContent:{xp:9,xpOffset:3}
    }
    render(){
        const {col,colContent, ...other} = this.props;
        return (
            <AbcCol {...col}>
                    <AbcRow>
                        <AbcCol {...colContent} style={{marginLeft:"15%"}}>
                            <ButtonToolbar  className="toolbar-abc">
                                <AbcButton>确定</AbcButton>
                                <AbcButton>取消</AbcButton>
                                <AbcButton>重置</AbcButton>
                                <HelpBlock></HelpBlock>
                            </ButtonToolbar>
                        </AbcCol>
                    </AbcRow>
            </AbcCol>
        )
    }
}

export class AbcColReduxFormButtonIcons extends AbcColReduxFormHorizontal{
    static propTypes =
    {
        controlId :PropTypes.string.isRequired,
        type:PropTypes.string.isRequired,
        label:PropTypes.string.isRequired,
        col:PropTypes.object,
        colContent:PropTypes.object,
        ref:PropTypes.string
    }
    static defaultProps =
    {
        //xs={12} xp={6} sm={6} lg={3}
        col:{xs:12,xp:6, sm:6, md:4, lg:3},
        // xpOffset={3} xp={9}
        colContent:{xp:9,xpOffset:3},
        type:'Checkbox'
    }
    render(){
        const {col,colContent, ...other} = this.props;
        return (
            <AbcCol {...col}>
                <AbcRow>
                    <AbcCol {...colContent} style={{marginLeft:"15%"}}>
                        <ButtonToolbar className="toolbar-icon-abc">
                            <Button className="thumbnail-btn">
                                <Glyphicon glyph="save"/></Button>
                            <Button className="thumbnail-btn">
                                <Glyphicon glyph="plus"/></Button>
                            <Button className="thumbnail-btn">
                                <Glyphicon glyph="pencil"/></Button>
                            <Button className="thumbnail-btn">
                                <Glyphicon glyph="trash"/></Button>

                        </ButtonToolbar>
                    </AbcCol>
                </AbcRow>
            </AbcCol>
        )
    }
}