import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import MenuAvatar from './MenuAvatar/MenuAvatar';
import './Menu.scss'


function Menu() {

	// const { user } = useContext();

    return(
      <nav className="navbar bg-dark Menu">
			<Link className="navbar-brand" to="/">Instagram</Link>
				<ul className="nav mr-auto">
				<li className="nav-item active">
					<Link className="nav-link" to="/">
						<FontAwesomeIcon icon={faHome} className="mr-2"/>Home 
						<span className="sr-only">(current)</span>
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/post/create">Create Post</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link">
						<MenuAvatar />
					</Link>
				</li>
			</ul>				
		</nav>

    );
}

export default Menu;