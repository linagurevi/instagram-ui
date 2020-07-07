import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import  { SignupSchema } from './signup.schema';
import { Link, useHistory } from 'react-router-dom';
import config from '../config/index';
import './signup.scss';
import img1 from '../BgImage/lights.jpg'
import img2 from '../BgImage//face.jpg'
import img3 from '../BgImage/plant-head.jpg'


function Signup() {

    const [showError, setError] = useState(false);
    const [bgImage, setBgImage] = useState(null);
    
    const history = useHistory();
    
    
    const submit = async (values) => {
            setError(false);
            const res = await fetch(config.apiUrl + '/users', {
                method: 'PUT',
                headers: {
                    'Content-Type' : 'application/Json'
                },
                body: JSON.stringify(values)
            });
            if (res.status === 201) {
                history.push('/'); // redirect home
            } else if (res.status === 409) {
                setError(true);
            } else {
                console.log('unknown error')
            }
            return res;
    }

    useEffect(() =>{
        const imgArray = [img1, img2, img3];
        setBgImage(imgArray[Math.floor(Math.random() * imgArray.length)]);
    }, [])

    return (
        
             <div className="row m-0">
                <div className="col d-flex justify-content-center signup-img" style={{backgroundImage: `url(${bgImage})` }}></div>
                <div className="col-md d-flex justify-content-center signup-form">
                    <div className="col-10 mt-5">
                    <h2>Sign up</h2>
                    <Formik initialValues={{username: '', password: '', email: '', agreeToTerms: false}}
                            validationSchema={SignupSchema}
                            onSubmit={submit}>

                            {({ errors, touched, isSubmitting }) => (

                                <Form noValidate>
                                    <div className="form-group">
                                        { showError && <div className="alert alert-danger">
                                            Email or username already exists
                                        </div> }
                                    </div>
                                <div className="form-group" id="username-input">
                                    <label htmlFor="username">Username</label>
                                    <Field type="text" className="form-control" id="username" name="username" placeholder="Type username"/>
                                    {errors.username && touched.username && <small className="text-danger mt-2 pl-2">{errors.username}</small>}
                                </div>
                                <div className="form-group" id="email-input">
                                    <label htmlFor="email">Email</label>
                                    <Field type="email" className="form-control" id="email" name="email" placeholder="type email address"/>
                                    {errors.email && touched.email && <small className="text-danger mt-2 pl-2">{errors.email}</small>}
                                </div>
                                <div className="form-group" id="password-input">
                                    <label htmlFor="password">Password</label>
                                    <Field type="password" className="form-control" id="password" name="password" placeholder="2-16 characters"/>
                                    {errors.password && touched.password && <small className="text-danger mt-2 pl-2"l>{errors.password}</small>}
                                </div>
                                <div>
                                <div className="form-check" id="agreeToTerms">
                                    <Field type="checkbox" className="form-check-input" id="agreeToTerms" name="agreeToTerms"/>
                                    <label htmlFor="agreeToTerms" className="form-check-label">Agree to terms</label>
                                </div>
                                {errors.agreeToTerms && touched.agreeToTerms && <small className="text-danger mt-2 pl-2"l>{errors.agreeToTerms}</small>}
                                </div>
                                <div className="form-gorup text-right mt-4">
                                    <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>Sign in</button>
                                </div>
                                <hr className="mt-4" />
                                <div className="text-center">
                                    Already have an account? <Link to="/login">Login</Link>
                                </div>
                            </Form>

                            )}

                    
                    </Formik>
                    
                    </div>

                </div>
            </div>  
       
           
    );
}

export default Signup;