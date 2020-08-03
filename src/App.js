import React, { useEffect, useState } from 'react';
import './App.scss';
import {
    Switch,
    Route,
    useHistory
} from "react-router-dom";
import Signup from './Signup/Signup';
import LogIn from './Login/Login';
import PostCreate from './PostCreate/PostCreate';
import { UserContext } from './user-context';
import { UserService } from './services/user-service';
import Menu from './Menu/Menu';
import AppLoader from './AppLoader/AppLoader';
import Feed from './Feed/Feed';
import Profile from './Profile/Profile';
import ProfileEdit from './Profile/ProfileEdit/ProfileEdit';
import Search from './Search/Search';



function App() {
  
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    async function getUser() {
        const user = await UserService.get();
        setUser(user);
        setLoading(false);
        if (!user) {
            history.push('/login');
        }
    }
    getUser();
  }, [history]);

    return (
      <UserContext.Provider value={{user, setUser}}>
          <AppLoader show={isLoading} />
          <div className="App d-flex flex-column flex-sm-column-reverse">
              <div className="flex-grow-1 main">
                  <Switch>
                      <Route path="/signup">
                          <Signup />
                      </Route>
                      <Route path="/login">
                          <LogIn />
                      </Route>
                      <Route path="/post/create">
                          <PostCreate />
                      </Route>
                      <Route path="/profile/edit">
                          <ProfileEdit />
                      </Route>
                      <Route path="/profile">
                          <Profile />
                      </Route>
                      <Route path="/search">
                          <Search />
                      </Route>
                      <Route path="/">
                          <Feed /> 
                      </Route>
                  </Switch>
              </div>
              { user && <Menu /> }
          </div>
      </UserContext.Provider>

    );
}

export default App;
