import React from 'react';
import './Error.scss';

export default function PageError() {

    return (
        <section className="not-found">
            <div className="info">此页面不存在 <span>:(</span></div>
            <div className="btn-line"><a href={"/"}>回到首页</a></div>
        </section>
    );
}