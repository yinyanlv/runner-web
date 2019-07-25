import React from 'react';
import {Comment} from './Comment';
import './Comment.scss';

interface CommentsProps {
    items: any[];
    count: number;
}

class Comments extends React.PureComponent<CommentsProps> {

    render() {
        const items = this.props.items;
        const count = this.props.count;

        return (
            <div className="panel">
                <div className="panel-header">
                    <div className="title"><span>{items.length}</span> 条回复</div>
                </div>
                <div className="panel-content">
                    {
                        count ? items.map((item, index) => {
                           return <Comment index={index} item={item} />;
                        }) : (
                            <div className="no-data">
                                暂无回复
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Comments;

