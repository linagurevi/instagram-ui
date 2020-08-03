import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../user-context';
import Avatar from '../Avatar/Avatar';
import config from '../config/index';
import Post from '../Post/Post';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import './Profile.scss';


function Profile() {

    const { user } = useContext(UserContext);
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
		getPosts();
	}, [user]);

    async function getPosts() {
        try {
            if(!user._id) {
                return;
            }
            const response = await fetch(config.apiUrl + `/users/${user._id}/posts?sort=-1`, {
                credentials: 'include'
            });
            const fetchedPosts = await response.json();
            setPosts(fetchedPosts);
        } catch(err) {
            console.log(posts);
        }
    }

    return(
        <div className="Profile">
            <header className="d-flex flex-column flex-lg-row mt-2">
				<div className="col-12 col-lg-4 text-center">
					<Avatar size="lg" image={user.avatar} />
				</div>
				<div className="col-12 col-lg-8 text-center text-lg-left">
                        <h2 className="d-inline p-2 h3 mt-2">{ user.username }</h2>
                        <Link className="nav-link d-inline" to="/profile/edit">
                            <FontAwesomeIcon icon={faEdit} />
						</Link>
					<div className="mt-3">
						<strong className="mr-3 mr-lg-5">{posts.length} posts</strong>
						<strong className="mr-3 mr-lg-5">0 followers</strong>
						<strong>0 following</strong>
					</div>
					<p className="mt-3 text-muted">
						{user.bio}
					</p>
				</div>
			</header>

			<hr className="mx-3 my-4" />

			<div className="d-flex flex-wrap">
				{ posts.map(post => <Post key={post._id} data={post} />) }
			</div>

        </div>
    );
}

export default Profile;