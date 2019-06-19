import React, {PureComponent} from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import MobileDetect from 'mobile-detect';
import AppContext from './AppContext';
import history from './history';
import store from './store';
import './mock';
import './App.scss';
import {Auth} from './components/Auth';
import {Layout1} from './layouts/layout1';
import {PageError} from './pages/Error';

class App extends PureComponent {

    mobileDetect: MobileDetect = new MobileDetect(window.navigator.userAgent);
    isMobile = this.mobileDetect.mobile();

    constructor(props) {
        super(props);
    }

    componentDidMount(): void {

    }

    render() {
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
    }
}

export default App;
