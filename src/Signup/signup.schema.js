import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({

    username: Yup.string()
        .min(2, 'Username is too short')
        .max(16, 'Username is too long')
        .required('Username is required'),
    
    email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),

    password: Yup.string()
        .min(2, 'Password is too short')
        .max(16, 'Password is too long')
        .required('Username is required'),

    agreeToTerms: Yup.boolean()
        .oneOf([true], 'you must agree to term to sign up')
        
});