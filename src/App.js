import React, { useState, useEffect } from 'react';
import './App.scss';
import Menu from './Menu/Menu';
import Signup from './Signup/Signup';
import LogIn from './Login/Login';
import PostCreate from './PostCreate/PostCreate';
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import { UserContext } from './user-context';
import { UserService } from './services/user-service';


function App() {
  
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    async function getUser() {
      const user = await UserService.get();
      setUser(user);
      if(!user) {
        history.push('/login');
      }
      console.log(user);
    }
    getUser();
  }, [history]);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <div className="d-flex flex-column flex-sm-column-reverse m-0 vh-100">
        <div className="containe flex-grow-1">
                <Switch>
                <Route path="/login">
                    <LogIn />
                  </Route>
                  <Route path="/signup">
                    <Signup />
                  </Route>
                  <Route path="/post/create">
                    <PostCreate />
                  </Route>
                  <Route path="/">
                    Home!
                  </Route>
                </Switch>
          </div>
          {user && <Menu />}
      </div>

</UserContext.Provider>
      
  );
}

export default App;
