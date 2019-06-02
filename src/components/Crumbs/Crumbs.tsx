import React from 'react';
import './Crumbs.scss';

export default function Crumbs() {
    return (
        <div className="crumbs">
            <a href="/">首页</a>
            <span className="divider">/</span>
            <span className="current">HOLDER</span>
        </div>
    );
}
