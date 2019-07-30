import React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import jwtService from '../../services/jwtService';
import AppContext from '../../AppContext';
import {bindActionCreators} from 'redux';
import * as actions from '../../store/user/user.actions';

const notNeedLoginUrls = ['/login', '/register'];

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

        const {history, user, location} = props;
        const {pathname, state} = location;

        if (user.role === 'guest') {  // 如果该用户未登录，访问无权限的页面时，重定向至登录页
            if (!notNeedLoginUrls.includes(pathname)) {
                history.push({
                    pathname: '/login',
                    state: {
                        redirectUrl: pathname
                    }
                });
            }
        } else {  // 如果该用户已登录，访问无权限的页面时，重定向至redirectUrl或首页
            const redirectUrl = state.redirectUrl ? state.redirectUrl : '/';

            history.push({
                pathname: redirectUrl
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
