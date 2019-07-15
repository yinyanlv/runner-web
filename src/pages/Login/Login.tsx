import React, {ChangeEvent} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import './Login.scss';
import {Crumbs} from '../../components/Crumbs';
import * as actions from './actions';

interface LoginProps {
    login: any;
    handleUsernameChange: any;
    handlePasswordChange: any;
    submitLogin: any;
    setError: any;
}

class PageLogin extends React.PureComponent<LoginProps> {

    crumbs: any[] = [{
        text: '首页',
        url: '/'
    }, {
        text: '登录'
    }];

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
                username: this.props.login.username.value,
                password: this.props.login.password.value
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

            this.props.setError({
                username: {
                    invalid: true
                },
                errorMessage: '用户名不能为空'
            });
            return false;
        }

        if (!loginState.password.value) {
            this.props.setError({
                password: {
                    invalid: true
                },
                errorMessage: '密码不能为空'
            });
            return false;
        }

        this.props.setError({
            errorMessage: ''
        });

        return true;
    };

    render() {
        const loginState = this.props.login;

        return (
            <div className="panel">
                <div className="panel-header">
                    <Crumbs items={this.crumbs} />
                </div>
                <div className="panel-content">
                    <div className="frame-form">
                        <div className="input-line">
                            <label><span className="required">*</span>用户名：</label>
                            <div className="input-wrapper">
                                <input type="text" name="username"
                                       className={clsx({"error": loginState.username.invalid})}
                                       value={loginState.username.value || ''}
                                       onChange={this.props.handleUsernameChange}
                                       onKeyUp={this.handleKeyUp}/>
                            </div>
                        </div>
                        <div className="input-line">
                            <label><span className="required">*</span>密码：</label>
                            <div className="input-wrapper">
                                <input type="password" name="password" autoComplete="off"
                                       className={clsx({"error": loginState.password.invalid})}
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
                                <span
                                   className={clsx("btn btn-primary", {"disabled": loginState.isLogin})}
                                   onClick={this.doLogin}>登录</span>
                                <span
                                   className={clsx("btn btn-primary", {"disabled": loginState.isGithubLogin})}
                                   onClick={this.doGithubLogin}>通过 Github 登录</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({login}) {

    return {
        login
    };
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        handleUsernameChange: (e: ChangeEvent) => {
            const data = (e.target as any).value;

            return {
                type: actions.LOGIN_INPUT_USERNAME,
                payload: data
            };
        },

        handlePasswordChange: (e: ChangeEvent) => {
            const data = (e.target as any).value;

            return {
                type: actions.LOGIN_INPUT_PASSWORD,
                payload: data
            };
        },

        submitLogin: actions.submitLogin,

        setError: (data) => {

            return {
                type: actions.LOGIN_ERROR,
                payload: data
            };
        }
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(PageLogin);
