import React from 'react';
import {Link} from 'react-router-dom';
import './Error.scss';

export default function PageError() {

    return (
        <section className="not-found">
            <div className="info">此页面不存在 <span>:(</span></div>
            <div className="btn-line"><Link to={"/"}>回到首页</Link></div>
        </section>
    );
}