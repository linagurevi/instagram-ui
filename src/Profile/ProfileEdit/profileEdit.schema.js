import * as Yup from 'yup';

export const ProfileEditSchema = Yup.object().shape({
	avatar: Yup.mixed(),
	bio: Yup.string()
		.max(40, 'bio up to 40 characters'),
});