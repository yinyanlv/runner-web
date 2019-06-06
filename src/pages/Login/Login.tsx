import React, {ChangeEvent} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';
import clsx from 'clsx';
import './Login.scss';
import Crumbs from '../../components/Crumbs/Crumbs';
import history from '../../history';
import {submitLogin, LOGIN_INPUT_PASSWORD, LOGIN_INPUT_USERNAME} from './actions';

interface LoginProps {
    login: any;
    handleUsernameChange: any;
    handlePasswordChange: any;
    submitLogin: any;
}

class PageLogin extends React.PureComponent<LoginProps> {

    constructor(props: any) {
        super(props);
    }

    handleKeyUp = (e: any) => {
        if (e.keyCode === 13) {
            this.doLogin();
        }
    };

    doLogin = () => {

        if (this.props.login.isLogin) {
            return;
        }

        if (this.checkValid()) {
            this.props.submitLogin({
                username: this.props.login.username,
                password: this.props.login.password
            });
        }
    };

    doGithubLogin = () => {

        if (this.props.login.isGithubLogin) {
            return;
        }
    };

    checkValid = (): boolean => {
        const loginState = this.props.login;

        if (!loginState.username.value) {

            this.setState({
                username: {
                    invalid: true
                },
                errorMessage: '用户名不能为空'
            });
            return false;
        }

        if (!loginState.password.value) {
            this.setState({
                password: {
                    invalid: true
                },
                errorMessage: '密码不能为空'
            });
            return false;
        }

        this.setState({
            errorMessage: ''
        });

        return true;
    };

    render() {
        const loginState = this.props.login;

        return (
            <>
                <div className="panel-header">
                    <Crumbs/>
                </div>
                <div className="panel-content">
                    <div className="frame-form">
                        <div className="input-line">
                            <label><span className="required">*</span>用户名：</label>
                            <div className="input-wrapper">
                                <input type="text" name="username" className={clsx({"error": loginState.username.invalid})}
                                       value={loginState.username.value || ''}
                                       onChange={this.props.handleUsernameChange}
                                       onKeyUp={this.handleKeyUp}/>
                            </div>
                        </div>
                        <div className="input-line">
                            <label><span className="required">*</span>密码：</label>
                            <div className="input-wrapper">
                                <input type="password" name="password" autoComplete="off" className={clsx({"error": loginState.password.invalid})}
                                       value={loginState.password.value || ''}
                                       onChange={this.props.handlePasswordChange}
                                       onKeyUp={this.handleKeyUp}/>
                            </div>
                        </div>
                        <div className="help-line">
                            <div className="help-wrapper">
                                <Link to={"/forgot"}>忘记密码？</Link>
                            </div>
                        </div>
                        {
                            loginState.errorMessage && <div className="error-line">
                                <div className="error-wrapper">
                                    <i className="fa fa-exclamation-circle"></i> <span>{loginState.errorMessage}</span>
                                </div>
                            </div>
                        }
                        <div className="btn-line">
                            <div className="btn-wrapper">
                                <a href="javascript:;" className={clsx("btn btn-primary", {"disabled": loginState.isLogin})} onClick={this.doLogin}>登录</a>
                                <a href="javascript:;" className={clsx("btn btn-primary", {"disabled": loginState.isGithubLogin})} onClick={this.doGithubLogin}>通过 Github 登录</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

function mapStateToProps({login}) {
    return {
        login
    };
}

function mapDispatchToProps(dispatch) {

    return {
        handleUsernameChange: (e: ChangeEvent) => {
            const data = (e.target as any).value;

            dispatch({
                type: LOGIN_INPUT_USERNAME,
                payload: data
            });
        },

        handlePasswordChange: (e: ChangeEvent) => {
            const data = (e.target as any).value;

            dispatch({
                type: LOGIN_INPUT_PASSWORD,
                payload: data
            });
        },

        submitLogin: submitLogin
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(PageLogin);