import React,{ Component, createElement ,PropTypes} from 'react'
import {Field} from 'redux-form';
import classNames           from 'classnames'
import { ControlLabel, HelpBlock,FormControl,Col} from '../abc-bootstrap'
import AbcCol from './AbcCol'
import AbcFormGroup from './AbcFormGroup'
import AbcFormControl from './AbcFormControl'
import entries from 'lodash/entries'
import keys from 'lodash/keys'
Object.entries=Object.entries||entries;
Object.keys=Object.keys||keys;

export default class AbcCol233WLReduxForm extends React.Component
{
    static propTypes =
    {
        controlId :PropTypes.string.isRequired,
        type:PropTypes.string.isRequired,
        label:PropTypes.string,
        placeholder:PropTypes.string.isRequired,
        col:PropTypes.object,
        col_lable:PropTypes.object,
        col_content:PropTypes.object,
        ref:PropTypes.string
    }

    static defaultProps =
    {
        //xs={6} sm={4} md={4} lg={4}
        col:{xs:6, sm:4, md:4, lg:4,xsHidden:false},
        //md={2} lg={2} xsHidden ={true} smHidden ={true}
        colLable:{md:2, lg:2, xsHidden :true, smHidden :true},
        //xs={12} sm={12} md={10} lg={10}
        colContent:{xs:12, sm:12, md:10, lg:10},
        type:'text'
    }

    renderField = ({ input, controlId,label,
        type,placeholder,col,colLable,colContent,
        meta: { asyncValidating, touched, error,warning } }) => {
        return (
            <AbcCol
                {...col
                }
            >
            <AbcFormGroup controlId={controlId}
                 validationState={error&&error.flag||warning&&warning.flag||!error&&'success'}>
                <AbcCol
                    {...colLable}
                >
                <ControlLabel style={{marginTop: "6px"}}>{label}</ControlLabel>
                </AbcCol>
                <AbcCol {...colContent}>
                    <AbcFormControl  {...input} type={type}
                        placeholder={placeholder}
                    />
                    <AbcFormControl.Feedback />
                    <HelpBlock>
                        {touched && ((error && <span>{error.message}</span>) ||
                        (warning && <span>{warning.message}</span>))}
                    </HelpBlock>

                </AbcCol>
            </AbcFormGroup>
            </AbcCol>
        )
    }

    render()
    {
        const {controlId, type,placeholder,field,
            label,  ...other} = this.props;
         return (//[linkName, {path, title}]
             <Field
                 name={field}
                 component={this.renderField.bind(this)}
                 controlId={controlId}
                 type={type}
                 label={label}
                 placeholder={placeholder}
                 { ...other}
             />
        );
    }
}

export class AbcCol233WLA extends React.Component{
    render() {
        return (
            <AbcCol233WLReduxForm
                {...this.props} />
        )
    }

}

export class AbcCol233WLB extends React.Component{
    render() {
        const col={xs:6, sm:4, md:4, lg:4,smHidden:false};
        const colLabel={md:2, lg:2 ,xsHidden:true ,smHidden :true};
        const colContent={xs:12, sm:12, md:10, lg:10};
        return (
            <AbcCol233WLReduxForm
                col={col}
                colLabel={colLabel}
                colContent={colContent}
                {...this.props} />
        )
    }

}

export class AbcCol233WLC extends React.Component{
    render() {
        const col={xs:0,sm:4, md:4, lg:4,xsHidden:true};
        const colLabel={md:2, lg:2 ,xsHidden:true ,smHidden :true};
        const colContent={xs:12, sm:12, md:10, lg:10};
        return (
            <AbcCol233WLReduxForm
                col={col}
                colLabel={colLabel}
                colContent={colContent}
                {...this.props} />
        )
    }

}