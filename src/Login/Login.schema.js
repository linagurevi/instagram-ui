import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({

    username: Yup.string()
    .required('Usernmae is required'),

    password: Yup.string()
    .required('Password is required')
});