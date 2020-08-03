import React, { useState, useEffect, useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import { LoginSchema } from './Login.schema';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../user-context';
// import BgImage  from '../BgImage/BgImage';
import config from '../config/index';
import './login.scss';
import img1 from '../BgImage/lights.jpg'
import img2 from '../BgImage//face.jpg'
import img3 from '../BgImage/plant-head.jpg'

function LogIn() {
    
    const [bgImage, setBgImage] = useState(null);
    const history= useHistory();
    const { setUser } = useContext(UserContext)

    const submit = async (values) => {
        const res = await fetch(config.apiUrl + '/users/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/Json'
            },
            credentials: 'include',
            body: JSON.stringify(values)
        });
        if(res.status === 200) {
            const loggedUser = await res.json();
            setUser(loggedUser);
            history.push('/'); // redirect home
            console.log('ok'); 
        } else if (res.status === 401) {
            console.log('failed'); 
        } else {
            console.log('unknown error');
        }
        return res;
    }

    useEffect(() =>{
        const imgArray = [img1, img2, img3];
        setBgImage(imgArray[Math.floor(Math.random() * imgArray.length)]);
    }, [])

    return (
        
            <div className="row">
                <div className="col justify-content-center login-img" style={{backgroundImage: `url(${bgImage})` }}></div>
                <div className="col-md-6 d-flex justify-content-center login-form">
                    <div className="col-10 mt-5">
                    <h2>Log in</h2>
                <Formik initialValues={{username: '', password: ''}}
                        validationSchema={LoginSchema}
                        onSubmit={submit}>

                        {({ errors, touched, isSubmitting }) => (

                            <Form noValidate>
                                <div className="form-group" id="username-input">
                                    <label htmlFor="username">Username</label>
                                    <Field type="text" className="form-control" id="username" name="username" placeholder="Type username"/>
                                    {errors.username && touched.username && <small className="text-danger mt-2 pl-2">{errors.username}</small>}
                                </div>
                                <div className="form-group" id="password-input">
                                    <label htmlFor="password">Password</label>
                                    <Field type="password" className="form-control" id="password" name="password" placeholder="2-16 characters"/>
                                    {errors.password && touched.password && <small className="text-danger mt-2 pl-2"l>{errors.password}</small>}
                                </div>
                                <div className="form-gorup text-right mt-4">
                                    <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>Log in</button>
                                </div>
                                <hr className="mt-4" />
                                <div className="text-center">
                                    Don't have an account? <Link to="/signup">Sign up</Link>
                                </div>
                        </Form>

                        )}
                </Formik>
                    </div>

                </div>
        </div>
       
        
    );
}

export default LogIn;