import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import config from '../config/index';
import Post from '../Post/Post'
import './feed.scss'


function Feed() {

    const [isLoading, setLoading] = useState(true);
	const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     async function loadPost(values){
    //         const res = await fetch(config.apiUrl + '/posts', {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type' : 'application/Json'
    //             },
    //             body: JSON.stringify(values)
    //         });
    //     }
    //     loadPost();
    // }, []);
    
    // const getPosts = async (values) => {
    //     const res = await fetch(config.apiUrl + '/posts', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type' : 'application/Json'
    //         },
    //         body: JSON.stringify(values)
    //     });
    // }
    
    // const history = useHistory();
    
    useEffect(() => {
		async function getPosts() {
			try {
				const response = await fetch(config.apiUrl + '/posts?sort=-1', {
					credentials: 'include'
				});
				const fetchedPosts = await response.json();
				setLoading(false);
				setPosts(fetchedPosts);
			} catch(err) {
				console.log(posts);
			}
		}
		getPosts();
	}, []);


	return (
		<div className="Feed d-flex flex-wrap">
			{ isLoading && <div className="loader">
                <FontAwesomeIcon icon={faSpinner} size="lg" spin />
         </div> }

			 { posts.map(post => <Post key={post._id} data={post} />) }
		</div>
	);
}

export default Feed;