import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter, RouteComponentProps, Link} from 'react-router-dom';
import './Detail.scss';
import * as actions from './actions';
import {Reply} from './Reply';
import {Comments} from './Comments';

interface PageTopicDetailProps extends RouteComponentProps {
    loadTopic: (topicId: string) => (dispatch: any) => void;
    topicDetail: any
}

class PageTopicDetail extends React.PureComponent<PageTopicDetailProps> {

    componentDidMount() {

        const topicId = this.props.match.params['id'];

        this.props.loadTopic(topicId);
    }

    render() {
        const topic = this.props.topicDetail;
        return (
            <>
                <div className="panel">
                    <article className="article">
                        <div className="article-header">
                            <div className="title">
                                {topic.category === 'office' && <span className="tag">官方</span>}
                                <h3>{topic.title}</h3>
                            </div>
                            <div className="info">
                                <span className="item">• 版块 <span
                                    className="tag tag-category">{topic.categoryName}</span></span>
                                <span className="item">• 作者 <Link to={"/"}>{topic.createBy.username}</Link></span>
                                <span className="item">• 发布于 <span className="datetime-ago">{topic.createTime}</span></span>
                                <span className="item">• {topic.commentCount} 个回复</span>
                                <span className="item">• {topic.viewCount} 次浏览</span>
                            </div>
                            <div className="operator operator-topic">
                                <div>
                                    <span className="btn btn-edit">
                                        <i className="fa fa-edit"></i> 编辑
                                    </span>
                                    <span className="btn btn-delete">
                                        <i className="fa fa-trash"></i> 删除
                                    </span>
                                    <span className="btn btn-collect">
                                        <i className="fa fa-star"></i><span className="text">已收藏</span>
                                    </span>
                                    <span className="btn btn-collect">
                                        <i className="fa fa fa-star-o"></i><span className="text">收藏</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="article-content">
                            <div className="markdown-body">
                                <div className="markdown-text">
                                    {topic.content}
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                <Comments items={topic.comments} />

                <Reply />

                <div className="panel guide-login">请先登录再发表评论。<Link to={"/login"}>登录</Link></div>
            </>
        );
    }
}

function mapStateToProps({topicDetail}) {

    return {
        topicDetail
    };
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        loadTopic: actions.loadTopic
    }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageTopicDetail));
