import React from 'react';
import {MdEditor} from '../../../../components/MdEditor';
import './Reply.scss';

class Reply extends React.PureComponent {

    state = {
        value: ''
    };

    handleChange = (value) => {

        this.setState({
            value
        });
    };

    handleReply = () => {

    };

    render() {

        return (
            <div className="panel">
                <div className="panel-header">
                    <div className="title">添加回复</div>
                </div>
                <div className="panel-content">
                    <div className="editor-wrapper">
                        <div className="editor-wrapper-inner">
                            <MdEditor value={this.state.value} onChange={this.handleChange} />
                        </div>
                        <div className="btn-line">
                            <span className="btn btn-primary btn-reply-topic" onClick={this.handleReply}>回复</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reply;
