import React from 'react';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import { PostCreateSchema } from './post-create.schema';
import config from '../config/index';
import './PostCreate.scss';


function PostCreate () {

    const submit = async (values) => {
        const res = await fetch(config.apiUrl + '/posts', {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/Json'
            },
            credentials: 'include',
            body: JSON.stringify(values)
        });
    };

    return(
        <div className="row m-0">
            <div className="col d-flex justify-content-center login-img">
                     {/*<img src={require('./beel-coor-BjFFEuZ7DWU-unsplash.jpg')} className="img-fluid"  alt="flowers on head" style={{backgroundColor: "grey"}} /> */}
                </div>
                <div className="col-md d-flex justify-content-center post-create-form">
                    <div className="col-10 mt-4 pl-0">
                    <h2>Create Post</h2>
                <Formik initialValues={{image: '', description: ''}}
                        validationSchema={PostCreateSchema}
                        onSubmit={submit}>

                        {({ isSubmitting }) => (

                            <Form noValidate>
                                <div className="form-group" id="image-input">
                                    <label htmlFor="image">Image</label>
                                    <Field type="file" className="form-control" id="image" name="image"/>
                                    <ErrorMessage component="small" name="image" className="PostCreate__form__error" />
                                </div>
                                <div className="form-group" id="description-input">
                                    <label htmlFor="description">Description</label>
                                    <Field as="textarea" className="form-control" id="description" name="description" placeholder="Description"/>
                                    <ErrorMessage component="small" name="image" className="PostCreate__form__error" />
                                </div>
                                <div className="form-gorup text-right">
                                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Post</button>
                                </div>
                        </Form>

                        )}
                </Formik>
                    </div>

                </div>
        </div>
    );
}

export default PostCreate;