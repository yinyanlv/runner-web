import React from 'react';
import {Route} from "react-router-dom";
import './Main.scss';
import Aside from "../Aside/Aside";
import PageLogin from "../../pages/Login/Login";
import PageHome from "../../pages/Home/Home";

export default class Main {

    render() {
        return (
            <section className="frame-content">
                <div className="frame-wrapper">
                    <div className="m-search">
                        <div className="search">
                            <input className="input-search" type="search" name="keyword" placeholder="请输入关键字"/>
                            <a className="btn btn-search" href="javascript:;"><i className="fa fa-search"></i></a>
                        </div>
                    </div>
                    <section>
                        <div className="block-main">
                            <div className="panel">
                                <Route path={"/login"} component={<PageLogin/>}/>
                                <Route path={"/home"} component={<PageHome/>}/>
                            </div>
                        </div>
                        <Aside/>
                    </section>
                </div>
            </section>
        );
    }
}
