import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import AppContext from './AppContext';
import history from './history';
import store from './store';
import './mock';
import './App.scss';
import Auth from './components/Auth/Auth';
import Layout1 from './layouts/layout1/Layout1';
import PageError from './pages/Error/Error';

const App: React.FC = () => {

  return (
      <AppContext.Provider value={{
          test: 'test'
      }}>
          <Provider store={store}>
              <Router history={history}>
                  <Auth>
                      <Switch>
                          <Route path={"/404"} component={PageError} />
                          <Route component={Layout1} />
                      </Switch>
                  </Auth>
              </Router>
          </Provider>
      </AppContext.Provider>
  );
};

export default App;
