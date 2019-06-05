import React, {ChangeEvent} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';
import clsx from 'clsx';
import './Login.scss';
import Crumbs from '../../components/Crumbs/Crumbs';
import history from '../../history';
import {LOGIN} from './actions';

class PageLogin extends React.PureComponent {

    state = {
        username: {
            value: '',
            invalid: false
        },
        password: {
            value: '',
            invalid: false
        },
        errorMessage: '',
        isLogin: false,
        isGithubLogin: false
    };

    constructor(props: any) {
        super(props);
    }

    componentDidMount(): void {
        let props: any = this.props;

        setTimeout(() => {
            props.login({test: 333});
        }, 3000);
    }


    handleUsernameChange = (e: ChangeEvent) => {
        const value = (e.target as any).value;

        this.setState({
            username: {
                value: value
            }
        });
    };

    handlePasswordChange = (e: ChangeEvent) => {
        const value = (e.target as any).value;

        this.setState({
            password: {
                value: value
            }
        });
    };

    handleKeyUp = (e: any) => {
        if (e.keyCode === 13) {
            this.doLogin();
        }
    };

    doLogin = () => {

        if (this.state.isLogin) {
            return;
        }

        if (this.checkValid()) {
            this.setState({
                isLogin: true
            });

            axios.post('/api/login', {
                username: this.state.username.value,
                password: this.state.password.value
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

        if (this.state.isGithubLogin) {
            return;
        }

        if (this.checkValid()) {
            this.setState({
                isGithubLogin: true
            });
        }
    };

    checkValid = (): boolean => {

        if (!this.state.username.value) {

            this.setState({
                username: {
                    invalid: true
                },
                errorMessage: '用户名不能为空'
            });
            return false;
        }

        if (!this.state.password.value) {
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
                                <input type="text" name="username" className={clsx({"error": this.state.username.invalid})}
                                       value={this.state.username.value || ''}
                                       onChange={this.handleUsernameChange}
                                       onKeyUp={this.handleKeyUp}/>
                            </div>
                        </div>
                        <div className="input-line">
                            <label><span className="required">*</span>密码：</label>
                            <div className="input-wrapper">
                                <input type="password" name="password" autoComplete="off" className={clsx({"error": this.state.password.invalid})}
                                       value={this.state.password.value || ''}
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
                                <a href="javascript:;" className={clsx("btn btn-primary", {"disabled": this.state.isLogin})} onClick={this.doLogin}>登录</a>
                                <a href="javascript:;" className={clsx("btn btn-primary", {"disabled": this.state.isGithubLogin})} onClick={this.doGithubLogin}>通过 Github 登录</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

function mapStateToProps(state: any) {
    console.log('----------');
    console.log(state);
    return {
        state
    };
}

const mapDispatchToProps = {
    login: (data: any) => ({
        type: LOGIN,
        data
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(PageLogin);