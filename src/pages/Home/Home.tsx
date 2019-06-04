import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Pagination from '../../components/Pagination/Pagination';

export default function PageHome() {

    useEffect(() => {
        axios.get('/api/topic-list').then(res => {
            console.log(res.data);
        });
    });

    return (
        <>
            <div className="panel-header">
                <div className="tabs">
                    <a href={"/"}>item.categoryNameCn</a>
                </div>
            </div>
            <div className="panel-content">
                <div v-for="(topic, index) in topics" className="topic">
                    <div className="avatar">
                        <a href={"/"}><img src="static/images/avatars/avatar.jpg"/></a>
                    </div>
                    <div className="info">
                        <dl>
                            <dt>
                                <span className="tag tag-category">topic.categoryNameCn</span>
                                <a href={"/"}>topic.title</a>
                            </dt>
                            <dd>
                                        <span className="item"><a href={"/"}>topic.username</a>
                                        发布于 <span className="datetime-ago">topic.rtime</span></span>
                                <span className="item">• <i
                                    className="reply-count">topic.commentCount</i> 个回复</span>
                                <span className="item">• <i
                                    className="view-count">topic.viewCount</i> 次浏览</span>

                                <span className="item right">最后由 <a href={"/"}>
                                          <img src="static/images/avatars/avatar.jpg"/> username</a> 回复于
                                  <span className="datetime-ago">5 个月前</span>
                  </span>
                            </dd>
                        </dl>
                    </div>
                </div>

                <div className="no-data">
                    暂无数据
                </div>
            </div>
            <div className="panel-footer">
                <Pagination/>
            </div>
        </>
    );
}