import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { Home } from './Component';
import './app.scss';

function App() {
  return (
    <div className="container mt-5">
       <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Redirect to="/" />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
