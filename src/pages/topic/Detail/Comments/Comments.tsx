import React from 'react';
import {Link} from 'react-router-dom';
import {MdEditor} from '../../../../components/MdEditor';
import './Comment.scss';

interface CommentsProps {
    items: any[];
}

class Comments extends React.PureComponent<CommentsProps> {

    state = {
        value: ''
    };

    handleChange = (value) => {

        this.setState({
            value
        });
    };

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
                                                    <span className="btn btn-reply">
                                                        <i className="fa fa fa-mail-reply"></i>
                                                        <span className="text"> 回复</span>
                                                    </span>
                                                </div>
                                            </dt>
                                            <dd>
                                                <div className="markdown-body">{item.content}</div>
                                            </dd>

                                            <dd className="editor-wrapper-box">
                                                <div className="editor-wrapper">
                                                    <div className="editor-wrapper-inner">
                                                        <MdEditor value={this.state.value} onChange={this.handleChange} />
                                                    </div>
                                                    <div className="btn-line">
                                                        <span className="btn btn-primary btn-reply-topic">回复</span>
                                                    </div>
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>

                                    <div className={"comments"}>
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
                                                            <span className="btn btn-reply">
                                                        <i className="fa fa fa-mail-reply"></i>
                                                        <span className="text"> 回复</span>
                                                    </span>
                                                        </div>
                                                    </dt>
                                                    <dd>
                                                        <div className="markdown-body">{item.content}</div>
                                                    </dd>

                                                    <dd className="editor-wrapper-box">
                                                        <div className="editor-wrapper">
                                                            <div className="editor-wrapper-inner">
                                                                <MdEditor value={this.state.value} onChange={this.handleChange} />
                                                            </div>
                                                            <div className="btn-line">
                                                                <span className="btn btn-primary btn-reply-topic">回复</span>
                                                            </div>
                                                        </div>
                                                    </dd>
                                                </dl>
                                                <div className={"comments"}>

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
                                                                        <span className="btn btn-reply">
                                                        <i className="fa fa fa-mail-reply"></i>
                                                        <span className="text"> 回复</span>
                                                    </span>
                                                                    </div>
                                                                </dt>
                                                                <dd>
                                                                    <div className="markdown-body">{item.content}</div>
                                                                </dd>

                                                                <dd className="editor-wrapper-box">
                                                                    <div className="editor-wrapper">
                                                                        <div className="editor-wrapper-inner">
                                                                            <MdEditor value={this.state.value} onChange={this.handleChange} />
                                                                        </div>
                                                                        <div className="btn-line">
                                                                            <span className="btn btn-primary btn-reply-topic">回复</span>
                                                                        </div>
                                                                    </div>
                                                                </dd>
                                                            </dl>
                                                            <div className={"comments"}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

