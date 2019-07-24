import React, {RefObject} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Formsy from 'formsy-react';
import clsx from 'clsx';
import {Crumbs} from '../../components/Crumbs';
import {Input} from '../../components/Input';
import * as actions from './actions';

interface RegisterProps {
    register: any;
    submitRegister: any;
    setError: any;
}

class PageRegister extends React.PureComponent<RegisterProps> {

    formRef: RefObject<any>;
    crumbs: any[] = [{
        text: '首页',
        url: '/'
    }, {
        text: '注册'
    }];

    constructor(props) {
        super(props);
        this.formRef = React.createRef();
    }

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

        if (this.props.register.isRegistering) {
            return;
        }

        this.formRef.current.submit();
    };

    doGithubLogin = () => {

        if (this.props.register.isGithubLogining) {
            return;
        }

        this.formRef.current.submit();
    };

    submit = (params: any) => {

        this.props.submitRegister(params);
    };

    render() {
        const registerState = this.props.register;

        return (
            <div className="panel">
                <div className="panel-header">
                    <Crumbs items={this.crumbs}/>
                </div>
                <div className="panel-content">
                    <div className="frame-form">
                        <Formsy ref={this.formRef} onChange={this.onHandleChange} onValidSubmit={this.submit}>
                            <Input name="email" type="text" label={"邮箱"} autoComplete="off" required
                                   handleKeyUp={this.handleKeyUp}
                                   validations={{
                                       isEmail: true
                                   }}
                                   validationErrors={{
                                       isEmail: '邮箱格式不正确',
                                       isDefaultRequiredValue: '邮箱为必填项'
                                   }}
                            />
                            <Input name="username" label={"用户名"} required
                                   handleKeyUp={this.handleKeyUp}
                                   validations={{
                                       minLength: 2,
                                       maxLength: 20
                                   }}
                                   validationErrors={{
                                       minLength: '用户名最少2个字符',
                                       maxLength: '用户名最多20个字符',
                                       isDefaultRequiredValue: '用户名为必填项'
                                   }}
                            />
                            <Input name="password" type="password" label={"密码"} autoComplete="off" required
                                   handleKeyUp={this.handleKeyUp}
                                   validations={{
                                       minLength: 6,
                                       maxLength: 20,
                                       equalsField: 'repeatPassword'
                                   }}
                                   validationErrors={{
                                       minLength: '密码最少6个字符',
                                       maxLength: '密码最多20个字符',
                                       equalsField: '两次输入的密码不一致',
                                       isDefaultRequiredValue: '密码为必填项'
                                   }}
                            />
                            <Input name="repeatPassword" type="password" label={"重复密码"} autoComplete="off" required
                                   handleKeyUp={this.handleKeyUp}
                                   validations={{
                                       minLength: 6,
                                       maxLength: 20,
                                       equalsField: 'password'
                                   }}
                                   validationErrors={{
                                       minLength: '密码最少6个字符',
                                       maxLength: '密码最多20个字符',
                                       equalsField: '两次输入的密码不一致',
                                       isDefaultRequiredValue: '密码为必填项'
                                   }}
                            />
                            <div className="help-line">
                                <div className="help-wrapper">
                                    <Link to={"/forgot"}>忘记密码？</Link>
                                </div>
                            </div>
                            {
                                registerState.errorMessage && (
                                    <div className="error-line">
                                        <div className="error-wrapper">
                                            <i className="fa fa-exclamation-circle"></i> <span>{registerState.errorMessage}</span>
                                        </div>
                                    </div>
                                )
                            }
                            <div className="btn-line">
                                <div className="btn-wrapper">
                                <span
                                    className={clsx("btn btn-primary", {"disabled": registerState.isRegistering})}
                                    onClick={this.doLogin}>注册</span>
                                    <span
                                        className={clsx("btn btn-primary", {"disabled": registerState.isGithubLogining})}
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

function mapStateToProps({register}) {

    return {
        register
    };
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        submitRegister: actions.submitRegister,
        setError: (data) => {

            return {
                type: actions.REGISTER_ERROR,
                payload: data
            };
        }
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(PageRegister);
