import React, {ChangeEvent} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Login.scss';
import Crumbs from "../../components/Crumbs/Crumbs";
import history from '../../history';

class PageLogin extends React.Component {

    state = {
        username: '',
        password: '',
        errorMessage: '',
        isLogin: false,
        isGithubLogin: false
    };

    constructor(props: any) {
        super(props);
    }

    handleUsernameChange = (e: ChangeEvent) => {
        const value = (e.target as any).value;

        this.setState({
            username: value
        });
    };

    handlePasswordChange = (e: ChangeEvent) => {
        const value = (e.target as any).value;

        this.setState({
            password: value
        });
    };

    handleKeyUp = (e: any) => {
        if (e.keyCode === 13) {
            this.doLogin();
        }
    };

    doLogin = () => {

        if (this.checkValid()) {
            this.setState({
                isLogin: true
            });

            axios.post('/api/login', {
                username: this.state.username,
                password: this.state.password
            }).then((res) => {
                this.setState({
                    isLogin: false
                });
                if (res.data.success) {
                    this.setState({
                        errorMessage: ''
                    });
                    history.push('/');
                } else {
                    this.setState({
                        errorMessage: res.data.message
                    });
                }
            });
        }
    };

    doGithubLogin = () => {

        if (this.checkValid()) {
            this.setState({
                isGithubLogin: true
            });
        }
    };

    checkValid = (): boolean => {

        if (!this.state.username) {

            this.setState({
                errorMessage: '用户名不能为空'
            });
            return false;
        }

        if (!this.state.password) {
            this.setState({
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
        return (
            <React.Fragment>
                <div className="panel-header">
                    <Crumbs/>
                </div>
                <div className="panel-content">
                    <div className="frame-form">
                        <div className="input-line">
                            <label><span className="required">*</span>用户名：</label>
                            <div className="input-wrapper">
                                <input type="text" name="username"
                                       value={this.state.username}
                                       onChange={this.handleUsernameChange}
                                       onKeyUp={this.handleKeyUp}/>
                            </div>
                        </div>
                        <div className="input-line">
                            <label><span className="required">*</span>密码：</label>
                            <div className="input-wrapper">
                                <input type="password" name="password" autoComplete="off"
                                       value={this.state.password}
                                       onChange={this.handlePasswordChange}
                                       onKeyUp={this.handleKeyUp}/>
                            </div>
                        </div>
                        <div className="help-line">
                            <div className="help-wrapper">
                                <Link to={"/forgot"}>忘记密码？</Link>
                            </div>
                        </div>
                        {
                            this.state.errorMessage && <div className="error-line">
                                <div className="error-wrapper">
                                    <i className="fa fa-exclamation-circle"></i> <span>{this.state.errorMessage}</span>
                                </div>
                            </div>
                        }
                        <div className="btn-line">
                            <div className="btn-wrapper">
                                <a href="javascript:;" className="btn btn-primary" onClick={this.doLogin}>登录</a>
                                <a href="javascript:;" className="btn btn-primary" onClick={this.doGithubLogin}>通过 Github 登录</a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default PageLogin;