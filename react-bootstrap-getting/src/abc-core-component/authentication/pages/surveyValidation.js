import memoize from 'lru-memoize';
import {createValidator, required, maxLength, email,minLength}
    from '../../../abc-framework/utils/validation';

const surveyValidation = createValidator({
  name: [required, minLength(10)],
  email: [required, email],
  occupation: maxLength(20) // single rules don't have to be in an array
});
export default memoize(10)(surveyValidation);
