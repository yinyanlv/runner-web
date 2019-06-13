import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import './Header.scss';
import * as actions from '../../store/user/user.actions';

interface HeaderProps {
    logout: any;
    user: any;
}

class Header extends React.PureComponent<HeaderProps> {

    render() {
        return (
            <section>
                <header className="frame-header">
                    <div className="frame-wrapper">
                        <div className="header-left">
                            <Link className="logo" to="/">
                                <img src="static/images/logo.png"/>
                            </Link>
                            <nav>
                                <Link to={"/"} className="active">首页</Link>
                            </nav>
                        </div>
                        <div className="header-right">
                            <div className="search">
                                <input className="input-search" type="search" name="keyword" placeholder="请输入关键字" />
                                <a className="btn btn-search" href="javascript:;"><i className="fa fa-search"></i></a>
                            </div>
                            <nav>
                                <Link to={"/create-topic"} >发布话题</Link>
                                <Link to={"/user/" + this.props.user.username}>{this.props.user.username}</Link>
                                <a href="javascript:;" onClick={this.props.logout}>退出</a>
                                <Link to={"register"}>注册</Link>
                                <Link to={"/login"}>登录</Link>
                            </nav>
                        </div>
                    </div>
                </header>

                <header className="m-frame-header">
                    <a href="javascript:;" className="btn btn-menu"><i className="fa fa-navicon"></i></a>
                    <div className="box-btns">
                        <Link className="btn" to={"/create-topic"}>发布话题</Link>
                        <Link className="btn" to={"/register"}>注册</Link>
                        <Link className="btn" to={"/login"}>登录</Link>
                    </div>
                    <div className="title">
                        <Link to={"/"}><img src="static/images/logo_short.png"/></Link>
                    </div>
                </header>

                <div className="m-nav-bg"></div>
                <nav className="m-nav">
                    <Link to={"/"}><span className="icon"><i className="fa fa-home"></i></span> 首页</Link>
                    <Link to={"/user/" + this.props.user.username}><span className="icon"><i className="fa fa-user-circle"></i></span> 用户中心</Link>
                    <a href="javascript:;" onClick={this.props.logout}><span className="icon"><i className="fa fa-sign-out"></i></span> 退出</a>
                </nav>
            </section>
        );
    }
}

function mapStateToProps({user}) {

    return {
        user
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logout: actions.logout
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);