import React, { useContext } from 'react';
import './menu-avatar.scss'
import { UserContext } from '../../user-context';
import avatarDefault from '../MenuAvatar/avatar-default.jpg';

function MenuAvatar() {

    const {user} = useContext(UserContext);

    return(
        <div className="MenuAvatar">
            <img className="MenuAvatar__image"
                 src={user && user.avatar ? user.avatar : avatarDefault} 
                 alt={user && user.username} />
        </div>
    );
}

export default MenuAvatar;