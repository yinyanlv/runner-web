import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Formsy from 'formsy-react';
import clsx from 'clsx';
import './Login.scss';
import {Crumbs} from '../../components/Crumbs';
import {Input} from '../../components/Input';
import * as actions from './actions';

interface LoginProps {
    login: any;
    submitLogin: any;
    setError: any;
}

class PageLogin extends React.PureComponent<LoginProps> {

    formRef: any;

    constructor(props) {
        super(props);

        this.formRef = React.createRef();
    }

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

    onHandleChange = (model: any) => {
        this.props.setError({
            errorMessage: ''
        });
    };

    doLogin = () => {

        if (this.props.login.isLogin) {
            return;
        }

        this.formRef.current.submit();
    };

    doGithubLogin = () => {

        if (this.props.login.isGithubLogin) {
            return;
        }

        this.formRef.current.submit();
    };

    submit = (params: any) => {
        console.log(params);
        this.props.submitLogin(params);
    };

    render() {
        const loginState = this.props.login;

        return (
            <div className="panel">
                <div className="panel-header">
                    <Crumbs items={this.crumbs}/>
                </div>
                <div className="panel-content">
                    <div className="frame-form">
                        <Formsy ref={this.formRef} onChange={this.onHandleChange} onValidSubmit={this.submit}>
                            <Input name="username" label={"用户名"} required="isExisty"
                                   handleKeyUp={this.handleKeyUp}
                                   validations={{
                                       minLength: 2,
                                       maxLength: 20
                                   }}
                                   validationErrors={{
                                       minLength: '用户名最少2个字符',
                                       maxLength: '用户名最多20个字符',
                                       isExisty: '用户名为必填项'
                                   }}
                            />
                            <Input name="password" type="password" label={"密码"} autoComplete="off" required
                                   handleKeyUp={this.handleKeyUp}
                                   validations={{
                                       minLength: 6,
                                       maxLength: 20
                                   }}
                                   validationErrors={{
                                       minLength: '密码最少6个字符',
                                       maxLength: '用户名最多20个字符'
                                   }}
                            />
                            <div className="help-line">
                                <div className="help-wrapper">
                                    <Link to={"/forgot"}>忘记密码？</Link>
                                </div>
                            </div>
                            {
                                loginState.errorMessage && (
                                    <div className="error-line">
                                        <div className="error-wrapper">
                                            <i className="fa fa-exclamation-circle"></i> <span>{loginState.errorMessage}</span>
                                        </div>
                                    </div>
                                )
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
                        </Formsy>
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
