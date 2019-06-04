import React from 'react';
import './Edit.scss';
import Aside from '../../../components/Aside/Aside';
import Crumbs from '../../../components/Crumbs/Crumbs';

export default function PageTopicEdit() {
    return (
        <section>
            <div className="block-main">
                <div className="panel">
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
                </div>
            </div>
            <Aside/>
        </section>
    );
}