import * as yup from 'yup';

import {AppRegex} from '../constants';

/*
    Login form validation
*/
export const LoginSchema = yup.object<LoginFormParamsType>().shape({
  email: yup
    .string()
    .required('Please enter an email address')
    .matches(AppRegex.EMAIL, 'Please enter valid email address'),
  password: yup
    .string()
    .required('Please enter password')
    .matches(AppRegex.PASSWORD, 'Please enter valid password')
    .min(8, 'Please enter valid password'),
});

