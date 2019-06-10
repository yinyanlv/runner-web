import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import history from './history';
import store from './store';
import './interceptors';
import './mock';
import './App.scss';
import Layout1 from './layouts/layout1/Layout1';
import PageError from './pages/Error/Error';

const App: React.FC = () => {

  return (
      <Provider store={store}>
          <Router history={history}>
              <Switch>
                  <Route path={"/404"} component={PageError} />
                  <Route component={Layout1} />
              </Switch>
          </Router>
      </Provider>
  );
};

export default App;
