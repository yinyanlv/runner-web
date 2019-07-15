import React from 'react';
import {Link} from 'react-router-dom';

interface CommentsProps {
    items: any[];
}

class Comments extends React.PureComponent<CommentsProps> {

    render() {
        const items = this.props.items;

        return (
            <div className="panel">
                <div className="panel-header">
                    <div className="title"><span>{items.length}</span> 条回复</div>
                </div>
                <div className="panel-content">
                    {
                        items.map((item, index) => {
                            return (
                                <div className="comment">
                                    <div className="avatar">
                                        <Link to={"/"}><img src="/static/images/avatars/avatar.jpg" alt={""} /></Link>
                                    </div>
                                    <div className="info">
                                        <dl>
                                            <dt>
                                                <div className="comment-info">
                                                    <Link to={"/"} className="username">{item.createBy}</Link>
                                                    • {index + 1} 楼
                                                    • <span className="datetime-ago">{item.createTime}</span>
                                                    <span>• <span className="tag">作者</span></span>
                                                </div>
                                                <div className="operator operator-comment">
                                                    <span className="btn btn-edit"><i className="fa fa-edit"></i> 编辑</span>
                                                    <span className="btn btn-delete"><i className="fa fa-trash"></i> 删除</span>
                                                </div>
                                            </dt>
                                            <dd>
                                                <div className="markdown-body">{item.content}</div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            );
                        })
                    }


                    <div className="no-data">
                        暂无回复
                    </div>
                </div>
            </div>
        );
    }
}

export default Comments;

