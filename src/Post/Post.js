import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import config from '../config/index';
import './Post.scss';
import PostLike from './PostLike/PostLike';
import Avatar from '../Avatar/Avatar';


function Post(props) {

    const formatDate = (dateStr) => {
		const date = new Date(dateStr);
		const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		return months[date.getMonth()] + ' ' + date.getDate();
	};

    const buildImageUrl = (imageName) => {
		return config.apiUrl + '/posts/' + imageName;
	};

	return (
		<div className="col-12 col-md-4">
			<article className="Post">
				<header>
					<div className="Post__user">
						<Avatar size="md" image={props.data.user.avatar}/>
						User name
					</div>
					<div className="Post__date">
						{formatDate(props.data.createdAt)}
					</div>
				</header>
				<div className="Post__image">
					<img src={buildImageUrl(props.data.image)} title={props.data.description} />
				</div>
				<div className="Post__content">
					<h1 className="Post__description">{props.data.description}</h1>
				</div>
				<div className="Post__likes">
					<PostLike postId={props.data._id} likes={props.data.likes}/>
				</div>
			</article>
		</div>
	);
}

export default Post;
