import React from 'react';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import { PostCreateSchema } from './post-create.schema';
import { useHistory } from 'react-router-dom';
import config from '../config/index';
import './PostCreate.scss';


function PostCreate () {

    const history = useHistory();

	const buildFormData = (values) => {
		const data = new FormData();
		for(const key in values) {
			data.append(key, values[key]);
		}
		return data;
	};

	const submit = async (values) => {
		const data = buildFormData(values);
		await fetch(`${config.apiUrl}/posts`, {
			method: 'PUT',
			credentials: 'include',
			body: data
		});
		history.push('/');
	};

    return(
        <div className="d-flex row">
		<div className="col-lg-6 order-sm-0 order-lg-1 my-lg-5">
			<h2 className="PostCreate__title">Create Post</h2>
			<Formik
				initialValues={{image: '', description: ''}}
				validationSchema={PostCreateSchema}
				onSubmit={submit}>
				{({ isSubmitting, setFieldValue }) => (
					<Form className="PostCreate__form mt-5 col-lg-8 px-0" noValidate>
						<div className="form-group">
							<label htmlFor="image">Image</label>
							<input type="file" id="image" name="image" onChange={(e) => {
								setFieldValue('image', e.currentTarget.files[0]);
							}} />
							<ErrorMessage component="small" name="image" className="PostCreate__form__error" />
						</div>
						<div className="form-group">
							<label htmlFor="description">Description</label>
							<Field as="textarea" className="form-control" name="description" id="description" />
							<ErrorMessage component="small" name="description" className="PostCreate__form__error" />
						</div>
						<div className="form-group text-right">
							<button type="submit" className="mt-3 PostCreate__submit-btn" disabled={isSubmitting}>Post</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	</div>
	);
}

export default PostCreate;