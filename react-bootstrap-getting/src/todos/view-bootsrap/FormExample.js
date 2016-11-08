import React, { findDOMNode, Component, PropTypes } from 'react';
import {FormGroup, ControlLabel, HelpBlock,FormControl ,
    Button,Checkbox,Radio ,Glyphicon,InputGroup,Col,Form} from 'react-bootstrap'
//import 'bootstrap/less/bootstrap.less';
//import 'bootstrap/less/theme.less';

    function FieldGroup({ id, label, help, ...props }) {
        return (
            <FormGroup controlId={id}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl {...props} />
                {help && <HelpBlock>{help}</HelpBlock>}
            </FormGroup>
        );
    }

/**
const FormExample = () => {

    return (
        <form>
    <FormGroup controlId="formValidationSuccess1" validationState="success">
        <ControlLabel>Input with success</ControlLabel>
        <FormControl type="text" />
        <HelpBlock>Help text with validation state.</HelpBlock>
    </FormGroup>

    <FormGroup controlId="formValidationWarning1" validationState="warning">
        <ControlLabel>Input with warning</ControlLabel>
    <FormControl type="text" />
        </FormGroup>

        <FormGroup controlId="formValidationError1" validationState="error">
        <ControlLabel>Input with error</ControlLabel>
    <FormControl type="text" />
        </FormGroup>

        <FormGroup controlId="formValidationSuccess2" validationState="success">
        <ControlLabel>Input with success and feedback icon</ControlLabel>
    <FormControl type="text" />
        <FormControl.Feedback />
        </FormGroup>

        <FormGroup controlId="formValidationWarning2" validationState="warning">
        <ControlLabel>Input with warning and feedback icon</ControlLabel>
    <FormControl type="text" />
        <FormControl.Feedback />
        </FormGroup>

        <FormGroup controlId="formValidationError2" validationState="error">
        <ControlLabel>Input with error and feedback icon</ControlLabel>
    <FormControl type="text" />
        <FormControl.Feedback />
        </FormGroup>

        <FormGroup controlId="formValidationSuccess3" validationState="success">
        <ControlLabel>Input with success and custom feedback icon</ControlLabel>
    <FormControl type="text" />
        <FormControl.Feedback>
        <Glyphicon glyph="music" />
        </FormControl.Feedback>
        </FormGroup>

        <FormGroup controlId="formValidationWarning3" validationState="warning">
        <ControlLabel>Input group with warning</ControlLabel>
    <InputGroup>
    <InputGroup.Addon>@</InputGroup.Addon>
    <FormControl type="text" />
        </InputGroup>
        <FormControl.Feedback />
        </FormGroup>

        <Form componentClass="fieldset" horizontal>
    <FormGroup controlId="formValidationError3" validationState="error">
        <Col componentClass={ControlLabel} xs={3}>
        Input with error
    </Col>
    <Col xs={9}>
        <FormControl type="text" />
        <FormControl.Feedback />
        </Col>
        </FormGroup>

        <FormGroup controlId="formValidationSuccess4" validationState="success">
        <Col componentClass={ControlLabel} xs={3}>
        Input group with success
    </Col>
    <Col xs={9}>
        <InputGroup>
        <InputGroup.Addon>@</InputGroup.Addon>
        <FormControl type="text" />
        </InputGroup>
        <FormControl.Feedback />
        </Col>
        </FormGroup>
        </Form>

        <Form componentClass="fieldset" inline>
    <FormGroup controlId="formValidationWarning4" validationState="warning">
        <ControlLabel>Input with warning</ControlLabel>
    {' '}
        <FormControl type="text" />
        <FormControl.Feedback />
        </FormGroup>
        {' '}
    <FormGroup controlId="formValidationError4" validationState="error">
        <ControlLabel>Input group with error</ControlLabel>
        {' '}
        <InputGroup>
            <InputGroup.Addon>@</InputGroup.Addon>
            <FormControl type="text" />
        </InputGroup>
        <FormControl.Feedback />
    </FormGroup>
    </Form>

    <Checkbox validationState="success">
        Checkbox with success
    </Checkbox>
    <Radio validationState="warning">
        Radio with warning
    </Radio>
    <Checkbox validationState="error">
        Checkbox with error
    </Checkbox>
      <FormGroup validationState="success">
            <Checkbox inline>
                Checkbox
            </Checkbox>
            {' '}
            <Checkbox inline>
                with
            </Checkbox>
            {' '}
            <Checkbox inline>
                success
            </Checkbox>
        </FormGroup>

            <Button  onClick={e => handleClick(e)}>
                Submit
            </Button>
        </form>
    )
};
**/
export default class FormExample extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:""
        }
    }
    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length >= 0) return 'error';
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleClick(e) {
        if (this.state.value === "" || this.state.value === null) {
            return ;
        }
        const node = this.refs.todovalue.value.trim();
        props.onAddClick(node);
        refs.todovalue.value = '';
    }

    render() {
        return (
            <form action="">
                <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
                >
                    <ControlLabel>Working example with validation</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        ref="todovalue"
                        placeholder="Enter text"
                        onChange={this.handleChange.bind(this)}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Validation is based on string length.</HelpBlock>
                </FormGroup>

                <Button type="button"
                        onClick={e =>this.handleClick(e)}>
                    Submit
                </Button>
            </form>
        )
    }
}

