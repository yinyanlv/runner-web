import React from 'react';
import './Main.scss';

export default function Main() {

    return (
        <section className="frame-content">
            <div className="frame-wrapper">
                <div className="m-search">
                    <div className="search">
                        <input className="input-search" type="search" name="keyword" placeholder="请输入关键字" value=""/>
                        <a className="btn btn-search" href="javascript:;"><i className="fa fa-search"></i></a>
                    </div>
                </div>
                {/*<slot></slot>*/}
            </div>
        </section>
    );
}
