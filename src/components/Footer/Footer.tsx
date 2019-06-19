import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
    return (
        <footer className="frame-footer">
            <div className="frame-wrapper">
                <div className="links">
                    <Link to={"/about"}>关于本站</Link>
                    <a href="https://github.com/yinyanlv/runner" target="_blank" rel="noopener noreferrer">本站源码地址</a>
                </div>
                <div className="site-info">Runner，一个 Rust 语言的中文社区，致力于 Rust 的技术研究与发展。</div>
            </div>
        </footer>
    );
}