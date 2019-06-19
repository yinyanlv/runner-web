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
                            <Link to={"/topic/create"} >发布话题</Link>
                            <Link to={"/user/" + this.props.user.username}>{this.props.user.username}</Link>
                            <a href="javascript:;" onClick={this.props.logout}>退出</a>
                            <Link to={"register"}>注册</Link>
                            <Link to={"/login"}>登录</Link>
                        </nav>
                    </div>
                </div>
            </header>
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