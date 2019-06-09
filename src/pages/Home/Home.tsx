import React from 'react';
import {Link} from 'react-router-dom';
import Pagination from '../../components/Pagination/Pagination';
import Tabs from "./Tabs/Tabs";

class PageHome extends React.PureComponent {

    state = {
        items: [{
            id: '1',
            url: '',
            category: '',
            categoryName: '精品',
            title: '这是标题',
            createBy: {
                url: '',
                avatarUrl: 'static/images/avatars/avatar.jpg',
                username: 'admin'
            },
            createTime: '2019-11-11 11:11',
            commentCount: 109,
            viewCount: 200,
            lastCommentBy: {
                url: '',
                avatarUrl: 'static/images/avatars/avatar.jpg',
                username: 'admin'
            },
            lastCommentTime: '2019-12-12 12:12'
        }, {
            id: '2',
            url: '',
            category: '',
            categoryName: '精品',
            title: '这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题',
            createBy: {
                url: '',
                avatarUrl: 'static/images/avatars/avatar.jpg',
                username: 'admin'
            },
            createTime: '2019-11-11 11:11',
            commentCount: 109,
            viewCount: 200,
            lastCommentBy: {
                url: '',
                avatarUrl: 'static/images/avatars/avatar.jpg',
                username: 'admin'
            },
            lastCommentTime: '2019-12-12 12:12'
        }]
    };


    render() {

        return (
            <>
                <div className="panel-header">
                    <Tabs/>
                </div>
                <div className="panel-content">

                    {
                        this.state.items.length && this.state.items.map((item) => {

                            return (
                                <div className="topic" key={item.id}>
                                    <div className="avatar">
                                        <Link to={item.createBy.url}><img src={item.createBy.avatarUrl}/></Link>
                                    </div>
                                    <div className="info">
                                        <dl>
                                            <dt>
                                                <span className="tag tag-category">{item.categoryName}</span>
                                                <Link to={item.url}> {item.title}</Link>
                                            </dt>
                                            <dd>
                                                <span className="item">
                                                    <Link to={item.createBy.url}>{item.createBy.username}</Link>
                                                    发布于 <span className="datetime-ago">{item.createTime}</span>
                                                </span>
                                                <span className="item">
                                                    • <i className="reply-count">{item.commentCount}</i> 个回复
                                                </span>
                                                <span className="item">
                                                    • <i className="view-count">{item.viewCount}</i> 次浏览
                                                </span>
                                                <span className="item right">
                                                    最后由
                                                    <Link to={item.lastCommentBy.url}>
                                                        <img
                                                            src={item.lastCommentBy.avatarUrl}/> {item.lastCommentBy.username}
                                                    </Link>
                                                    回复于
                                                    <span className="datetime-ago">{item.lastCommentTime}</span>
                                                </span>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            );
                        })
                    }

                    {
                        !this.state.items.length && <div className="no-data">
                            暂无数据
                        </div>
                    }
                </div>
                <div className="panel-footer">
                    <Pagination/>
                </div>
            </>
        );
    }
}

export default PageHome;