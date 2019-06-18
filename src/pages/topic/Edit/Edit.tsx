import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './Edit.scss';
import Crumbs from '../../../components/Crumbs/Crumbs';
import {func} from "prop-types";

class PageTopicEdit extends React.PureComponent {

    render() {
        return (
            <>
                <div className="panel-header">
                    <Crumbs/>
                </div>

                <div className="panel-content">
                    <div className="create-topic">
                        <div className="category-line">
                            <label>请选择版块：</label>
                            <select name="category" v-model="category">
                                <option value="">请选择</option>
                                <option>item.categoryNameCn</option>
                            </select>
                        </div>
                        <div className="title-line">
                            <label>标题：</label>
                            <div className="input-wrapper">
                                <input type="text" name="title" placeholder="请输入一个简洁、明确的标题"/>
                            </div>
                        </div>
                        <div className="editor-wrapper">
                            <div className="editor-wrapper-inner edit-article">
                                {/*<mavon-editor></mavon-editor>*/}
                            </div>
                        </div>
                        <div className="btn-line">
                            <a href="javascript:;" className="btn btn-primary">提交</a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

function mapStateToProps() {
    
}

function mapDispatchToProps() {

}


export default connect()(PageTopicEdit);