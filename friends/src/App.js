import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import FriendsData from "./components/FriendsData";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navigation">
          <Link to="/login" className="links">Login</Link>
          <Link to="/protected" className="links">Server Data</Link>
        </div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/protected" component={FriendsData} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
