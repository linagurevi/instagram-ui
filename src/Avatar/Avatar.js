import React from 'react';
import avaterDefault from './avatar-default.jpg';
import PropTypes from 'prop-types';
import './Avatar.scss';

function Avatar(props) {

const size = props.size || 'sm';
const image = props.image || avaterDefault;
const className = 'Avatar--' + size;

    return(
        <div>
            <img src={image} className={'Avatar ' + className} />
        </div>
    );
}

Avatar.propTypes = {
	size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

export default Avatar;