import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './Edit.scss';
import {MdEditor} from '../../../components/MdEditor';
import {Crumbs} from '../../../components/Crumbs';
import * as actions from './actions';
import * as categoryActions from '../../../store/category/category.actions';

interface PageTopicEditProps {
    category: any;
    loadCategories: any;
    createTopic: (params: any) => (dispatch: any) => void;
}

class PageTopicEdit extends React.PureComponent<PageTopicEditProps> {

    state = {
        category: '',
        title: '',
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

    handleCategoryChange = (e) => {
        this.setState({
            category: e.target.value
        });
    };

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    };

    handleEditorChange = (value) => {
        this.setState({
            value
        });
    };

    submit = () => {
        this.props.createTopic(this.state);
    };

    render() {
        return (
            <div className="panel">
                <div className="panel-header">
                    <Crumbs items={this.crumbs}/>
                </div>

                <div className="panel-content">
                    <div className="create-topic">
                        <div className="category-line">
                            <label>请选择版块：</label>
                            <select name="category" value={this.state.category} onChange={this.handleCategoryChange}>
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
                                <input type="text" name="title" value={this.state.title}
                                       onChange={this.handleTitleChange} placeholder="请输入一个简洁、明确的标题"/>
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
                            <span className="btn btn-primary" onClick={this.submit}>提交</span>
                        </div>
                    </div>
                </div>
            </div>
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
        loadCategories: categoryActions.loadCategories,
        createTopic: actions.createTopic
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(PageTopicEdit);
