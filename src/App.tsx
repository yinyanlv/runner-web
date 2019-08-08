import React, {PureComponent} from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import AppContext from './AppContext';
import history from './history';
import store from './store';
import './mock';
import './App.scss';
import {Auth} from './components/Auth';
import {Layout1} from './layouts/layout1';
import {PageError} from './pages/Error';
import {routes} from './layouts/layout1/routes';
import {unstable_track as track} from 'schedule/tracking';

class App extends PureComponent {

    state = {
        isMobile: this.isMobile()
    };

    componentDidMount(): void {
        window.addEventListener('resize', this.handleResize, false);
    }

    componentWillUnmount(): void {
        window.removeEventListener('resize', this.handleResize, false);
    }

    handleResize = () => {
        track('App resize', performance.now(), () => {
            console.log(111);
            this.setState({
                isMobile: this.isMobile()
            });
        });
    };

    isMobile() {
        return window.innerWidth < 960;
    }

    render() {
        return (
            <AppContext.Provider value={{
                isMobile: this.state.isMobile,
                routes: routes
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
