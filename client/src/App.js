import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router'
import MapPage from "./pages/MapPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={MapPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
