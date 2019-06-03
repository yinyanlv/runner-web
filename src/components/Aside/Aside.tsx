import React from 'react';
import './Aside.scss';

export default function Aside() {
    return (
        <aside className="block-aside">
            <div className="panel">
                <div className="panel-header">
                    <h4>话题推荐</h4>
                </div>
                <div className="panel-content">
                    {
                        // <ul class="info-list limit-text">
                        //     <li><router-link :to="{path: ''}">title</router-link></li>
                        // </ul>
                    }
                    <div className="no-data">暂无推荐的话题</div>
                </div>
            </div>
            <div className="panel friendly-link">
                <div className="panel-header">
                    <h4>友情社区</h4>
                </div>
                <div className="panel-content">
                    <ul className="info-list">
                        <li>
                            <a className="text" href="https://rust.cc" rel="nofollow" target="_blank">
                                rust.cc
                            </a>
                        </li>
                        <li>
                            <a href="https://ruby-china.org" rel="nofollow" target="_blank">
                                <img src="static/images/friendly/ruby.png"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://cnodejs.org" rel="nofollow" target="_blank">
                                <img src="static/images/friendly/cnode.png"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://gocn.io" rel="nofollow" target="_blank">
                                <img src="static/images/friendly/gocn.png"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="panel">
                <div className="panel-header">
                    <h4>统计信息</h4>
                </div>
                <div className="panel-content">
                    <ul className="info-list">
                        <li>社区会员: n 人</li>
                        <li>话题: n 个</li>
                        <li>博客: n 条</li>
                        <li>评论: n 条</li>
                        <li>收藏: n 条</li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}