import React, { useEffect, useState } from 'react';
import config from '../config/index';
import SearchResult from './SearchResult/SearchResult';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlasses } from '@fortawesome/free-solid-svg-icons';
import './Search.scss';

function Search(){


    const [query, setQuery] =  useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
		if (!query) {
			return;
		}
		getUsers();
	}, [query]);

    // Add debounce
    async function getUsers() {
        try {
            const response = await fetch(`${config.apiUrl}/users?username=${query}`)
            const users = await response.json();
            setUsers(users);
        } catch(err) {
            console.log(err); 
        }
        
    }

    function noResults() {
		return query && users.length === 0;
    }
    


     return (
         <div className="Search">
             <div className="col-lg-4">
                <input className="form-control" placeholder='Search account' value={query} onChange={(e) => setQuery(e.target.value)} />
             </div>
             <hr className="mx-3" />
             <div className="d-flex flex-wrap">
             { noResults()
					? <div className="Search__no-results"><FontAwesomeIcon icon={faGlasses} /><br />No results found</div>
					: users.map(user => <SearchResult user={user} key={user._id} />)
				}
             </div>
         </div>
     );

}

export default Search;