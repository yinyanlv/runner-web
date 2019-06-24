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

class App extends PureComponent {

    state = {
        isMobile: this.isMobile()
    };

    constructor(props) {
        super(props);
    }

    componentDidMount(): void {
        window.addEventListener('resize', this.handleResize, false);
    }

    componentWillUnmount(): void {
        window.removeEventListener('resize', this.handleResize, false);
    }

    handleResize = () => {

        this.setState({
            isMobile: this.isMobile()
        })
    };

    isMobile() {
        return window.innerWidth < 960;
    }

    render() {
        return (
            <AppContext.Provider value={{
                isMobile: this.state.isMobile
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
