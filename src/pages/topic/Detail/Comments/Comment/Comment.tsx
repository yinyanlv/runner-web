import React from 'react';
import {Link} from 'react-router-dom';
import {MdEditor} from '../../../../../components/MdEditor';
import {MdView} from '../../../../../components/MdView';
import {unstable_track as track} from 'schedule/tracking';

interface CommentProps {
    item: any;
    index: number;
}

class Comment extends React.PureComponent<CommentProps> {

    state = {
        isReplying: false,
        value: ''
    };

    handleChange = (value) => {
        track('test comment', performance.now(), () => {
            this.setState({
                value
            });
        });
    };

    showEditor = () => {

        this.setState({
            isReplying: true
        });
    };

    hideEditor = () => {
        this.setState({
            isReplying: false
        });
    };

    render() {
        const {item, index} = this.props;

        return (
            <div className="comment">
                <div className="avatar">
                    <Link to={"/"}><img src={item.createUserAvatarUrl} alt={""} /></Link>
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
                        </dt>
                        <dd>
                            <div className="markdown-body">
                                <MdView data={item.content} />
                            </div>
                            <div className="operator operator-comment">
                                <span className="btn btn-edit"><i className="fa fa-edit"></i> 编辑</span>
                                <span className="btn btn-delete"><i className="fa fa-trash"></i> 删除</span>
                                <span className="btn btn-reply" onClick={this.showEditor}>
                                    <i className="fa fa fa-mail-reply"></i>
                                    <span className="text"> 回复</span>
                                </span>
                            </div>
                        </dd>
                        {
                            this.state.isReplying && (
                                <dd className="editor-wrapper-box">
                                    <div className="editor-wrapper">
                                        <div className="editor-wrapper-inner">
                                            <MdEditor value={this.state.value} onChange={this.handleChange} />
                                        </div>
                                        <div className="btn-line">
                                            <span className="btn btn-primary btn-reply-topic">回复</span>
                                            <span className="btn btn-primary" onClick={this.hideEditor}>关闭</span>
                                        </div>
                                    </div>
                                </dd>
                            )
                        }
                    </dl>
                </div>
                {
                    item.comments && item.comments.length ? (
                        <div className={"comments"}>
                            {
                                item.comments.map((item, index) => {
                                    return <Comment key={item.id} item={item} index={index} />;
                                })
                            }
                        </div>
                    ) : null
                }
            </div>
        );
    }
}

export default Comment;

