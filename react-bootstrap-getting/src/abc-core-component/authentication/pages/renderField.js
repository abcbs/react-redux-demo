import React ,{PropTypes}from 'react';
import {FormGroup, ControlLabel, HelpBlock,FormControl,Form} from '../../../abc-bootstrap'
import {AbcLabel,AbcBadge,AbcButton,AbcButtonToolbar,AbcFormInline,AbcCol,
    AbcFormGroup,AbcFormControl,AbcDefaultButton,AbcRow,AbcPanel,
    AbcColA,AbcColB,AbcColC

} from '../../../abc-ui/abc-ui-index'



const renderField = ({ input, controlId, type,placeholder,label,
    meta: { asyncValidating, touched, error,warning } }) => {
    return (
        <AbcFormGroup controlId={controlId}
                      validationState={error&&error.flag||warning&&warning.flag||!error&&'success'}>
            <ControlLabel style={{marginTop: "6px"}}>{label}</ControlLabel>
            <AbcFormControl  {...input} type={type}
                                        placeholder={placeholder}
            />
            <AbcFormControl.Feedback />
            <HelpBlock>
                {touched && ((error && <span>{error.message}</span>) || (warning && <span>{warning.message}</span>))}
            </HelpBlock>
        </AbcFormGroup>
    )
}

export default renderField;