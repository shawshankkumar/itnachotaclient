import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Homepage from './components/Homepage';
import Fourofour from './components/404';
import Redirect from './components/redirect';

function App(): JSX.Element {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/:code">
            <Redirect />
          </Route>
          <Route exact path="*">
            <Fourofour />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
