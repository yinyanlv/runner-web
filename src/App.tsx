import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import history from './history';
import './mock';
import './App.scss';
import Layout1 from './layouts/Layout1';
import PageError from './pages/Error/Error';

const App: React.FC = () => {

  return (
      <Router history={history}>
        <Switch>
            <Route path={"/"} component={Layout1} />
            <Route component={PageError} />
        </Switch>
      </Router>
  );
};

export default App;
