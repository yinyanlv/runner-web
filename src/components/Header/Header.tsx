import React from 'react';

export default function Header() {
    return (
        <section>
            <header className="frame-header">
                <div className="frame-wrapper">
                    <div className="header-left">
                        <a className="logo" href="/"><img src="../assets/images/logo.png"/>
                            <span className="site-name">Ruster</span>
                        </a>
                        <nav>
                            <a className="active" href={"/"}>首页</a>
                            <a href="/wiki">Wiki</a>
                            <a href="/explore">Explore</a>
                        </nav>
                    </div>
                    <div className="header-right">
                        <div className="search">
                            <input className="input-search" type="search" name="keyword" placeholder="请输入关键字" value=""/>
                            <a className="btn btn-search" href="javascript:;"><i className="fa fa-search"></i></a>
                        </div>
                        <nav>
                            <a href="/create-topic">发布话题</a>
                            <a href="/user/username">username</a>
                            <a href="javascript:;">退出</a>
                            <a href="/register">注册</a>
                            <a href="/login">登录</a>
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
                    <a href={"/"}><img src="../assets/images/logo.png"/></a>
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