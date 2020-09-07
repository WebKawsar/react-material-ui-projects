import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import '@material-ui/core/';
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetail from './Components/Postdetail/PostDetail';
import Header from './Components/Header/Header';


function App() {

  return (

          <Router>
            
            <Header></Header>
            <Switch>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/postdetail/:postId">
                <PostDetail></PostDetail>
              </Route>
              <Route path="*">
                <NoMatch></NoMatch>
              </Route>

            </Switch>
          </Router>
        );
}

export default App;
