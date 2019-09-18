import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router';
/*Pages*/
import Home from './pages/home';
import UserPage from './pages/user';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={UserPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
