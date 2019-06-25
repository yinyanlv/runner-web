import React from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import './MHeader.scss';
import * as actions from '../../store/user/user.actions';

interface MHeaderProps{
    logout: () => (dispatch: Dispatch) => void;
    user: any;
}

class MHeader extends React.PureComponent<MHeaderProps> {
    render() {
        return (
            <>
                <header className="m-frame-header">
                    <a href="javascript:;" className="btn btn-menu"><i className="fa fa-navicon"></i></a>
                    <div className="box-btns">
                        {
                            this.props.user.authorized ? (
                                <>
                                    <Link className="btn" to={"/topic/create"}>发布话题</Link>
                                </>
                            ) : (
                                <>
                                    <Link className="btn" to={"/register"}>注册</Link>
                                    <Link className="btn" to={"/login"}>登录</Link>
                                </>
                            )
                        }
                    </div>
                    <div className="title">
                        <Link to={"/"}><img src="/static/images/logo_short.png"/></Link>
                    </div>
                </header>

                <div className="m-nav-bg"></div>
                <nav className="m-nav">
                    <Link to={"/"}><span className="icon"><i className="fa fa-home"></i></span> 首页</Link>
                    {
                        this.props.user.authorized && (
                            <>
                                <Link to={"/user/" + this.props.user.username}><span className="icon"><i className="fa fa-user-circle"></i></span> 用户中心</Link>
                                <a href="javascript:;" onClick={this.props.logout}><span className="icon"><i className="fa fa-sign-out"></i></span> 退出</a>
                            </>
                        )
                    }
                </nav>
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(MHeader);
