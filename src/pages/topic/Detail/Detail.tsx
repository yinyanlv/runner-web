import React from 'react';
import './Detail.scss';
import {Aside} from '../../../components/Aside';

class PageTopicDetail extends React.PureComponent {
    render() {
        return (
            <section className="page-topic-detail">
                <div className="block-main">
                    <div className="panel">
                        <article className="article">
                            <div className="article-header">
                                <div className="title">
                                    <span className="tag" v-if="topicCategory==='office'">官方</span>
                                    <h3>topic.title</h3>
                                </div>
                                <div className="info">
                                <span className="item">• 版块 <span
                                    className="tag tag-category">topicCategoryName</span></span>
                                    <span className="item">• 作者 <a href={""}>topicUser.username</a></span>
                                    <span className="item">• 发布于 <span className="datetime-ago">topicRtime</span></span>
                                    <span className="item">• topic.commentCount 个回复</span>
                                    <span className="item">• topic.viewCount 次浏览</span>
                                </div>
                                <div className="operator operator-topic">
                                    <div>
                                        {/*<span class="btn btn-edit"><i class="fa fa-edit"></i> 编辑</span>*/}
                                        {/*<span class="btn btn-delete"><i class="fa fa-trash"></i> 删除</span>*/}
                                        {/*<span class="btn btn-collect"><i class="fa fa-star"></i><span class="text">已收藏</span></span>*/}
                                        {/*<span class="btn btn-collect"><i class="fa fa fa-star-o"></i><span class="text">收藏</span></span>*/}
                                    </div>
                                </div>
                            </div>
                            <div className="article-content">
                                <div className="markdown-body">
                                    <div className="markdown-text" v-html="topic.content" v-highlight></div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="panel">
                        <div className="panel-header">
                            <div className="title"><span>topic.commentCount</span> 条回复</div>
                        </div>
                        <div className="panel-content">
                            <div className="comment" v-for="(comment, index) in comments">
                                <div className="avatar">
                                    <a href={""}><img src="/static/images/avatars/avatar.jpg"/></a>
                                </div>
                                <div className="info">
                                    <dl>
                                        <dt>
                                            <div className="comment-info">
                                                <a href={""} className="username">comment.username</a> • index +1 楼
                                                • <span className="datetime-ago">comment.rtime</span> <span
                                                v-if="topicUser.id === comment.userId">• <span
                                                className="tag">作者</span></span>
                                            </div>
                                            <div className="operator operator-comment">
                                                {/*<span class="btn btn-edit"><i class="fa fa-edit"></i> 编辑</span>*/}
                                                {/*<span class="btn btn-delete"><i class="fa fa-trash"></i> 删除</span>*/}
                                            </div>
                                        </dt>
                                        <dd>
                                            <div className="markdown-body" v-html="comment.content" v-highlight></div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>

                            <div v-if="topic.commentCount === 0" className="no-data">
                                暂无回复
                            </div>
                        </div>
                    </div>

                    <div className="panel" v-if="isLogined">
                        <div className="panel-header">
                            <div className="title">添加回复</div>
                        </div>
                        <div className="panel-content">
                            <div className="editor-wrapper">
                                <div className="editor-wrapper-inner">
                                    {/*<mavon-editor></mavon-editor>*/}
                                </div>
                                <div className="btn-line">
                                    <span className="btn btn-primary btn-reply-topic">回复</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="panel guide-login" v-if="!isLogined">请先登录再发表评论。<a href={"/login"}>登录</a></div>
                </div>
                <Aside/>
            </section>
        );
    }
}

export default PageTopicDetail;