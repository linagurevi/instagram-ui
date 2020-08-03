import React, { useContext } from 'react';
import { ProfileEditSchema } from './profileEdit.schema';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import config from '../../config/index';
import { UserContext } from '../../user-context';

function ProfileEdit() {

    const history = useHistory();
    const { user } = useContext(UserContext);

	const buildFormData = (values) => {
		const data = new FormData();
		for(const key in values) {
			data.append(key, values[key]);
		}
		return data;
	};

	const submit = async (values) => {
		const data = buildFormData(values);
		const res= await fetch(`${config.apiUrl}/users/${user.id}`, {
			method: 'POST',
			credentials: 'include',
			body: data
		});
		if(res.status === 200) {
            console.log('sucsess');
            history.push('/profile');
        } else if(res.status === 500) {
            console.log('failed');
        } else {
            console.log('error');   
        }
        return res;
	};


    return(
        <div className="Edit-profile d-flex row">
            <div className="col-lg-6 order-sm-0 order-lg-1 my-lg-5">
                <h2 className="ProfileEdit__title">Edit Profile</h2>
                <Formik
                    initialValues={{ bio: '', avatar: '' }}
                    validationSchema={ProfileEditSchema}
                    onSubmit={submit}>

                {({ errors, isSubmitting, setFieldValue }) => (
                    <Form className="ProfileEdit__form mt-5 col-lg-8 px-0" noValidate>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input type="file" id="image" name="image" onChange={(e) => {
                            setFieldValue('image', e.currentTarget.files[0]);
                        }} />
                        {/* <ErrorMessage component="small" name="image" className="PostCreate__form__error" /> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio">Bio</label>
                        <Field as="textarea" className="form-control" name="bio" id="bio" />
                        {errors.bio && <small className="text-danger pl-2">{errors.bio}</small>}
                    </div>
                    <div className="form-group text-right">
                    <button type="button" className="mt-3 mr-2 PostCreate__submit-btn d-inline btn btn-outline-secondary" onClick={() => {history.push('/profile')}}>Cancle</button>
                        <button type="submit" className="mt-3 PostCreate__submit-btn btn btn-primary" disabled={isSubmitting}>Update profile</button>
                    </div>
                </Form>
                )}

                </Formik>
            </div>
        </div>
    )
}

export default ProfileEdit;