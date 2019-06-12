import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import history from '../../history';
import './Header.scss';
import jwtService from "../../services/jwtService";
import {USER_RESET_USER_DATA} from '../../store/user/user.actions';

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
                            <a className="logo" href="/">
                                <img src="static/images/logo.png"/>
                            </a>
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
                                <a href="/create-topic">发布话题</a>
                                <a href="/user/username">{this.props.user.username}</a>
                                <a href="javascript:;" onClick={this.props.logout}>退出</a>
                                <a href="/register">注册</a>
                                <Link to={"/login"}>登录</Link>
                            </nav>
                        </div>
                    </div>
                </header>

                <header className="m-frame-header">
                    <a href="javascript:;" className="btn btn-menu"><i className="fa fa-navicon"></i></a>
                    <div className="box-btns">
                        <a className="btn" href={"/create-topic"}>发布话题</a>
                        <a className="btn" href={"/register"}>注册</a>
                        <a className="btn" href={"/login"}>登录</a>
                    </div>
                    <div className="title">
                        <a href={"/"}><img src="static/images/logo_short.png"/></a>
                    </div>
                </header>

                <div className="m-nav-bg"></div>
                <nav className="m-nav">
                    <a href={"/"}><span className="icon"><i className="fa fa-home"></i></span> 首页</a>
                    <a href={"/user/username"}><span className="icon"><i className="fa fa-user-circle"></i></span> 用户中心</a>
                    <a href="javascript:;"><span className="icon"><i className="fa fa-sign-out"></i></span> 退出</a>
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
        logout: () => {
            return (dispatch) => {
                jwtService.logout();
                dispatch({
                    type: USER_RESET_USER_DATA
                });
                history.push({
                    pathname: '/login'
                });
            };
        }
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);