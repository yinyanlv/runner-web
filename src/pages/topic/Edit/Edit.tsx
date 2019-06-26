import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './Edit.scss';
import {MdEditor} from '../../../components/MdEditor';
import {Crumbs} from '../../../components/Crumbs';
import * as actions from '../../../store/category/category.actions';

interface PageTopicEditProps {
    category: any;
    loadCategories: any;
}

class PageTopicEdit extends React.PureComponent<PageTopicEditProps> {

    state = {
        value: ''
    };

    crumbs: any[] = [{
        text: '首页',
        url: '/'
    }, {
        text: '新建话题'
    }];

    componentDidMount(): void {
        this.props.loadCategories();
    }

    handleEditorChange = (value) => {
        this.setState({
            value
        });
    };

    submit(value) {
        console.log(value);
    }

    render() {
        return (
            <>
                <div className="panel-header">
                    <Crumbs items={this.crumbs} />
                </div>

                <div className="panel-content">
                    <div className="create-topic">
                        <div className="category-line">
                            <label>请选择版块：</label>
                            <select name="category">
                                <option value="">请选择</option>
                                {
                                    this.props.category.categories && this.props.category.categories.map((item) => {
                                        return <option key={item.code} value={item.code}>{item.name}</option>;
                                    })
                                }
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
                                <MdEditor
                                    value={this.state.value}
                                    onChange={this.handleEditorChange}
                                />
                            </div>
                        </div>
                        <div className="btn-line">
                            <span className="btn btn-primary">提交</span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

function mapStateToProps({category}) {

    return {
        category
    };
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        loadCategories: actions.loadCategories
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(PageTopicEdit);