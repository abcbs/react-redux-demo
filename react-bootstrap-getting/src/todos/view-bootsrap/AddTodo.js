import React, { findDOMNode, Component, PropTypes } from 'react';
import {FormGroup, ControlLabel, HelpBlock,FormControl ,Panel,
    Button,Checkbox,Radio ,Glyphicon,InputGroup,Col,Form} from 'react-bootstrap'


export default class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todovalue:""
        }
    }

    render() {
        return (
                <div style={{marginTop:'20px'}}>
                        <ControlLabel style={{lineHeight:'40px'}}>增加条目</ControlLabel>
                        <FormGroup
                            controlId="formBasicText"
                            validationState={this.getValidationState()}
                        >

                            <FormControl
                                type="text"
                                value={this.state.todovalue}
                                placeholder="Enter text"
                                onChange={this.handleChange.bind(this)}
                            />
                            <FormControl.Feedback />
                            <HelpBlock>不能为空，长度大于10
                                <p>{this.state.todovalueHelp}</p>
                            </HelpBlock>
                        </FormGroup>

                        <Button type="button" bsStyle="success"
                                onClick={e =>this.handleClick(e)}>
                            添加
                        </Button>

                </div>
        );
    }

    changeTodo(e){
        let upwd = e.target.value;
        this.setState({
            todovalue: upwd
        })

    }

    handleClick(e) {
        if(this.getValidationState()==='success'){
            if(this.state.todovalue === ""||this.state.todovalue === null){

            }
            this.props.onAddClick(this.state.todovalue);
        }else{
            this.setState({
                todovalueHelp: "* Dodo不能为空,目前长度为:".concat(this.state.todovalue.length)
            });
            return ;
        }

    }

    getValidationState() {
        const length = this.state.todovalue.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length >= 0) return 'error';
    }

    handleChange(e) {
        this.setState({todovalue: e.target.value});
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired,

}