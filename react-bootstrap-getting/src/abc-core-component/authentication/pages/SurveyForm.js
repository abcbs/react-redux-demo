import React, {Component, PropTypes} from 'react';
import {Field,reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import surveyValidation from './surveyValidation';
import * as surveyActions from '../reducer/survey';
import renderField from './renderField'
import {AbcFormInline,AbcColRedFormA,AbcColRedFormB
} from '../../../abc-ui/abc-ui-index'

function asyncValidate(data, dispatch, {isValidEmail}) {
  if (!data.email) {
    return Promise.resolve({});
  }
  return isValidEmail(data);
}

const warn = values => {
  const warnings = {}
  const name=values.name;
   if (name&&name.length > 19) {
      warnings.name = {message:'名称字段小于19',flag:"warning"};
   }else{
     warnings.name = {message:'',flag:"success"};
   }
  const occupation=values.occupation;
  warnings.occupation = {message:'',flag:"default"};
  return warnings
}

@connect(() => ({}),
  dispatch => bindActionCreators(surveyActions, dispatch)
)
@reduxForm({
  form: 'survey',
  validate: surveyValidation,
  warn,
  asyncValidate,
  asyncBlurFields: ['email']
})
export default class SurveyForm extends Component {
  static propTypes = {
    active: PropTypes.string,
    asyncValidating: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,

    valid: PropTypes.bool.isRequired
  }

  render() {

    const { handleSubmit,reset, pristine, submitting } = this.props
    const styles = require('./SurveyForm.scss');
    // input, controlId, type,placeholder,
    const renderInput = (controlId,field, type, label,placeholder) =>

        <Field
               name={field}
               component={renderField}
               controlId={controlId}
               type={type}
               label={label}
               placeholder={placeholder}
              />
      ;
    //
    return (
      <div>
        <AbcFormInline onSubmit={handleSubmit} name="">
          {renderInput("controllerName","asname",'text','姓名', 'Full Name')}
          {renderInput("email","email",'text','邮箱', 'Email')}
          {renderInput("occupation","occupation",'text','职业', 'Occupation')}
          <AbcColRedFormA  name="name"
                           controlId="name"
                           type='text'
                           label='姓名'
                           placeholder='Full Name'/>
          <div>
            <button type="submit" disabled={submitting}>Sign Up</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
          </div>
        </AbcFormInline>

      </div>
    );
  }
}
