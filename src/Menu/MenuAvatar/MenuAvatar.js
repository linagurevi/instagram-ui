import React, { useContext } from 'react';
import './MenuAvatar.scss';
import { UserContext } from '../../user-context';
import Avatar from '../../Avatar/Avatar';

function MenuAvatar() {
	const { user } = useContext(UserContext);

	return (
		<div className="MenuAvatar">
			<Avatar size='sm' image={user.avatar} />
		</div>
	);
}

export default MenuAvatar;
