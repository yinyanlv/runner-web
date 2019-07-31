import React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {matchRoutes} from 'react-router-config';
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

    state: any = null;

    constructor(props, context) {
        super(props);

        const {routes} = context;

        this.state= {
            accessGranted: false,
            routes
        };
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

    static getDerivedStateFromProps(props, prevState) {
        const {user, location} = props;
        const {pathname} = location;
        const matched: any = matchRoutes(prevState.routes, pathname)[0];
        const route = matched ? matched.route : null;

        // 该路由未配置权限
        if (!route.auth || route.auth.length === 0) {
            return {
                accessGranted: true
            };
        }

        // 用户未登录
        if (!user.authorized) {
            return {
                accessGranted: false
            };
        }

        if (route.auth.includes(user.role)) {
            return {
                accessGranted: true
            };
        } else {
            return {
                accessGranted: false
            };
        }
    }

    private _redirectRoute(props: any) {
        const {history, user, location} = props;
        const {pathname, search, hash} = location;

        if (user.authorized) {  // 如果该用户已登录，访问无权限的页面时，重定向至之前访问的页面
            history.goBack();
        } else {  // 如果该用户未登录，访问无权限的页面时，重定向至登录页
            history.push({
                pathname: '/login',
                state: {
                    redirectPathname: pathname,
                    redirectSearch: search,
                    redirectHash: hash
                }
            });
        }
    }

    private _jwtCheck() {
        jwtService.on('authorized', () => {
            jwtService.loginWithAccessToken()
                .then((user) => {
                    const {history, location: {pathname, search, hash}} = this.props;
                    const state = history.location.state;

                    this.props.setUserData(user);

                    if (state) {
                        history.push({
                            pathname: state.redirectPathname,
                            search: state.redirectSearch,
                            hash: state.redirectHash
                        });
                    } else {
                        history.push({
                            pathname,
                            search,
                            hash
                        });
                    }
                })
                .catch((err) => {
                    const {history} = this.props;
                    alert(err);
                    history.push({
                        pathname: '/login'
                    });
                });
        });

        jwtService.on('unauthorized', () => {
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
