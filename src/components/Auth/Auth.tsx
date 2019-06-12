import React from 'react';
import {withRouter} from 'react-router-dom';
import jwtService from '../../services/jwtService';
import {connect} from 'react-redux';
import AppContext from '../../AppContext';

class Auth extends React.PureComponent {

    static contextType = AppContext;

    state: any = {
        accessGranted: false
    };

    constructor(props, context) {
        super(props);
        this._jwtCheck();
    }

    componentDidMount(): void {
        if (!this.state.accessGranted) {
            this._redirectRoute(this.props);
        }
    }

    componentDidUpdate(): void {

        if (!this.state.accessGranted) {
            this._redirectRoute(this.props);
        }
    }

    private _redirectRoute(props: any) {

        const {history, location} = props;
        const {pathname, state} = location;

        if (pathname !== '/login') {
            history.push({
                pathname: '/login',
                state: {
                    redirectUrl: pathname
                }
            });
        }
    }

    private _jwtCheck() {
        jwtService.on('authorized', () => {
            jwtService.loginWithAccessToken()
                .then((user) => {
                    this.setState({
                        accessGranted: true
                    });
                })
                .catch((err) => {
                    console.log(err);
                    this.setState({
                        accessGranted: false
                    });
                });
        });

        jwtService.on('unauthorized',  () => {
            this.setState({
                accessGranted: false
            });
        });

        jwtService.init();
    }

    render() {

        return <>{this.props.children}</>;
    }
}

function mapStateToProps(state) {
    return state;
}

export default withRouter(connect(mapStateToProps)(Auth) as any);