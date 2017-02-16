import React, { Component, PropTypes } from 'react'
import {AbcPanel,AbcRow,AbcFormHorizontal} from '../../../abc-ui/abc-ui-index'
import {ButtonGroup,Button,Checkbox,Col,Row ,Panel} from '../../../abc-bootstrap'
import RW from 'react-widgets';

import {DropdownList} from 'react-widgets';
var i = 0
  , list = [
    { id: i += 1, name: 'James' },
    { id: i += 1, name: 'Jan' },
    { id: i += 1, name: 'Jase' },
    { id: i += 1, name: 'Jason' },
    { id: i += 1, name: 'Jim' },
    { id: i += 1, name: 'Jimmy' },
    { id: i += 1, name: 'Jimmy Smith' },
    { id: i += 1, name: 'John' }
  ];
export  default class ComboboxSample extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      format: '',
      footer: true,
      culture:{},
      disabled:false,
      groupBy:true,
      suggest:false,
      busy:false,
      filter:false,
      isRtl:false,
      duration:0
    }

  }

  render(){
    var props;

    props = {
      data: list,
      defaultValue: 1,
      textField: 'name',
      valueField: 'id',
      suggest: this.state.suggest || false,
      filter: this.state.filter || false,
      disabled: this.state.disabled === 'disabled',
      readOnly: this.state.disabled === 'readonly',
      groupBy: this.state.groupBy,
      duration: this.state.duration,
      busy: this.state.busy,
      isRtl: this.state.isRtl
    }
    const c=RW.Combobox;
    return (
      <div className='example' role='application'>
        <AbcRow>
          <AbcRow>
            <div className='col-md-6 col-lg-7 demo'>
              <div className='form-group'>
                <RW.Combobox {...props}/>
              </div>
              <div className='form-group'>
                <label>Custom list Rendering</label>
                <RW.Combobox {...props} itemComponent={itemComp}/>
              </div>
            </div>
            <div className='col-md-6 col-lg-5 api-panel'>
              <div className='form-group' style={{marginLeft:"1rem"}}>
                <label className='checkbox-inline'>
                  <input type='checkbox'
                    checked={!!this.state.isRtl}
                    onChange={this._set.bind(this, 'isRtl', !this.state.isRtl)}/>
                    Right to Left
                </label>
              </div>

              <div className='form-group' style={{marginLeft:"1rem"}}>
                <ButtonGroup>
                  <Button
                    active={this.state.disabled === 'disabled'}
                    onClick={this.disabled.bind(this)}>
                    Disable
                  </Button>
                  <Button
                    active={this.state.disabled === 'readonly'}
                    onClick={this.readOnly.bind(this)}>
                    Readonly
                  </Button>
                </ButtonGroup>
                <Button style={{ marginLeft: 10 }}
                  active={this.state.busy}
                  onClick={this._set.bind(this, 'busy', !this.state.busy)}>
                  Busy
                </Button>
              </div>
              <div className='form-group' style={{marginLeft:"1rem"}}>
                <label className='checkbox-inline'>
                  <input type='checkbox'
                    checked={this.state.groupBy}
                    onChange={this._set.bind(this, 'groupBy', !this.state.groupBy ? (item => item.name.substr(0,2)) : null )}/>
                    Group
                </label>
                <label className='checkbox-inline'>
                  <input type='checkbox'
                    checked={this.state.suggest}
                    onChange={this._set.bind(this, 'suggest', !this.state.suggest)}/>
                    Suggestions
                </label>
              </div>
            </div>
          </AbcRow>
          <AbcRow>
              <div className='form-group col-xs-6'>
                <label className='form-label'>Filter</label>
                <DropdownList
                    value={this.state.filter || false}
                    data={[false, 'startsWith', 'endsWith', 'contains']}
                    onChange={this._set.bind(this, 'filter')}/>
              </div>

              <div className='form-group  col-xs-6'>
                <label className='form-label'>Duration</label>
                <RW.NumberPicker
                    value={this.state.duration}
                    step={200}
                    min={0}
                    max={1000}
                    onChange={this._set.bind(this, 'duration')}/>
              </div>
            </AbcRow>
        </AbcRow>
      </div>
    )
  }

  _change(val){
    this.setState({ value: val })
  }

  _set(field, value){
    var obj = {}
    obj[field] = value
    this.setState(obj)
  }

  readOnly(){
    var val = this.state.disabled === 'readonly' ? false : 'readonly'
    this.setState({ disabled: val })
  }

  disabled(){
    var val = this.state.disabled === 'disabled' ? false : 'disabled'
    this.setState({ disabled: val })
  }
}

var itemComp = React.createClass({
  render: function() {
    var icons =  ['bicycle', 'area-chart', 'anchor']

    this._icon || (this._icon = icons[getRandomInt(0, 2)])
    return (
      <div>
        <i className={'fa fa-' + this._icon}></i>
        { '  ' + this.props.item.name}
      </div>
    );
  }
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
