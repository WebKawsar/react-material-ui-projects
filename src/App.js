import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '@material-ui/core/';
import Home from './Components/Home/Home';


function App() {
  return (
            <Router>
              <Switch>

                <Route path="/home">
                  <Home></Home>
                </Route>
                <Route path="/">

                </Route>
                <Route path="/">

                </Route>
                <Route path="/">

                </Route>
                <Route path="/">

                </Route>

              </Switch>
            </Router>
        );
}

export default App;
