import React from 'react';
import './Footer.scss';

export default function Footer() {
    return (
        <footer className="frame-footer">
            <div className="frame-wrapper">
                <div className="links">
                    <a href="/about">关于本站</a>
                    <a href="https://github.com/ruster-xyz/ruster.git" target="_blank" rel="noopener noreferrer">本站源码地址</a>
                </div>
                <div className="site-info">Runner，一个 Rust 语言的中文社区，致力于 Rust 的技术研究与发展。</div>
            </div>
        </footer>
    );
}