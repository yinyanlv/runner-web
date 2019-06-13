import React from 'react';
import {DispatchProp, connect} from 'react-redux';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import jwtService from '../../services/jwtService';
import AppContext from '../../AppContext';
import {bindActionCreators} from 'redux';
import * as actions from '../../store/user/user.actions';
import {USER_SET_USER_DATA} from "../../store/user/user.actions";

interface AuthProps extends RouteComponentProps, DispatchProp {
    logout: any;
    user: any;
}

class Auth extends React.PureComponent<AuthProps> {

    static contextType = AppContext;

    state: any = {
        accessGranted: false
    };

    constructor(props, context) {
        super(props);
        this._jwtCheck();
    }

    componentDidMount(): void {
        if (!this.props.user.authorized) {
            this._redirectRoute(this.props);
        }
    }

    componentDidUpdate(): void {
        if (!this.state.accessGranted) {
            this._redirectRoute(this.props);
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            accessGranted: nextProps.user.authorized
        };
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
                    this.props.dispatch({
                        type: USER_SET_USER_DATA,
                        payload: {
                            username: user.username,
                            authorized: true
                        }
                    });

                    this.props.history.push('/');
                })
                .catch((err) => {
                    console.log(err);
                });
        });

        jwtService.on('unauthorized',  () => {

            this.props.logout();
        });

        jwtService.init();
    }

    render() {
        return <>{this.props.children}</>;
    }
}

function mapStateToProps({user}) {
    return {
        user
    };
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        logout: actions.logout
    }, dispatch);
}

export default withRouter<any>(connect(mapStateToProps, mapDispatchToProps)(Auth));