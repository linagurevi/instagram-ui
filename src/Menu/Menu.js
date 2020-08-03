import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlusSquare, faSearch } from '@fortawesome/free-solid-svg-icons';
import MenuAvatar from './MenuAvatar/MenuAvatar';
import './Menu.scss'


function Menu() {

    return(
		<div className="Menu">
			<nav className="navbar navbar-dark bg-dark">
				<a className="navbar-brand" href="/">Instagram</a>

				<ul className="nav ml-auto">
					<li className="nav-item">
						<Link className="nav-link" to="/search">
							<FontAwesomeIcon icon={faSearch} />
						</Link>
					</li>
					<li className="nav-item active">
						<Link className="nav-link" to="/">
							<FontAwesomeIcon icon={faHome} />
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/post/create">
							<FontAwesomeIcon icon={faPlusSquare} />
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/profile">
							<MenuAvatar />
						</Link>
					</li>
				</ul>
			</nav>
		</div>
    );
}

export default Menu;