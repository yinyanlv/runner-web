import React from 'react';
import './Login.scss';
import Crumbs from "../../components/Crumbs/Crumbs";
import Aside from "../../components/Aside/Aside";

export default function PageLogin() {
    return (
        <section>
            <div className="block-main">
                <div className="panel">
                    <div className="panel-header">
                        <Crumbs/>
                    </div>
                    <div className="panel-content">
                        <div className="frame-form">
                            <div className="input-line">
                                <label><span className="required">*</span>用户名：</label>
                                <div className="input-wrapper">
                                    <input type="text" name="username"/>
                                </div>
                            </div>
                            <div className="input-line">
                                <label><span className="required">*</span>密码：</label>
                                <div className="input-wrapper">
                                    <input type="password" name="password" autoComplete="off"/>
                                </div>
                            </div>
                            <div className="help-line">
                                <div className="help-wrapper">
                                    <a href={"/forgot"}>忘记密码？</a>
                                </div>
                            </div>
                            <div className="error-line">
                                <div className="error-wrapper">
                                    <i className="fa fa-exclamation-circle"></i> <span>errorMessage</span>
                                </div>
                            </div>
                            <div className="btn-line">
                                <div className="btn-wrapper">
                                    <a href="javascript:;" className="btn btn-primary">登录</a>
                                    {/*<a className="btn btn-primary" href="#">通过 Github 登录</a>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Aside/>
        </section>
    );
}