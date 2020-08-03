import React from 'react';
import Avatar from '../../Avatar/Avatar';
import './SearchResult.scss';

function SearchResult(props) {
	return (
		<div className="col-lg-4" key={props.user._id}>
			<div className="SearchResult d-flex">
				<div className="SearchResult__avatar">
					<Avatar size="md" image={props.user.avatar} />
				</div>
				<div>
					<strong>{ props.user.username }</strong>
					<p className="SearchResult__bio">{ props.user.bio }</p>
				</div>
			</div>
		</div>
	);
}

export default SearchResult;