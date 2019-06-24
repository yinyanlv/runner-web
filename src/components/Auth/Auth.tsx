import React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import jwtService from '../../services/jwtService';
import AppContext from '../../AppContext';
import {bindActionCreators} from 'redux';
import * as actions from '../../store/user/user.actions';

interface AuthProps extends RouteComponentProps, DispatchProp {
    logout: () => void;
    setUserData: (user: any) => void;
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
                    this.props.setUserData(user);
                    this.props.history.push({
                        pathname: this.props.location.state.redirectUrl || '/'
                    });
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
        logout: actions.logout,
        setUserData: actions.setUserData
    }, dispatch);
}

export default withRouter<any>(connect(mapStateToProps, mapDispatchToProps)(Auth));