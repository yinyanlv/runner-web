import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link, RouteComponentProps} from 'react-router-dom';
import {Pagination} from '../../components/Pagination';
import {Tabs} from './Tabs';
import * as actions from './actions';

interface PageHomeProps extends RouteComponentProps{
    loadTopics: any;
    home: any;
}

class PageHome extends React.PureComponent<PageHomeProps> {

    state = {
        tab: 'all',
        page: 1
    };

    componentDidMount(): void {
        const queryParams = new URLSearchParams(this.props.location.search);
        const tab = queryParams.get('tab') || 'all';
        const page = queryParams.get('page') || 1;

        this.setState({
            tab,
            page
        });

        this.props.loadTopics({
            tab,
            page
        });
    }

    handleClickTab = (item) => {

        const params = {
            tab: item.id,
            page: 1
        };

        this.setState(params, () => {
            this.changeLocation(params);
        });

        if (item.id !== this.state.tab) {
            this.props.loadTopics(params);
        }
    };

    handleClickPage = (item) => {

        const params = {
            tab: this.state.tab,
            page: item.page
        };

        this.setState(params, () => {
            this.changeLocation(params);
        });

        if (item.page !== this.state.page) {
            this.props.loadTopics(params);
        }
    };

    changeLocation(params) {
        this.props.history.replace(`/?tab=${params.tab}&page=${params.page}`);
    }

    render() {

        return (
            <>
                <div className="panel-header">
                    <Tabs items={this.props.home.tabs} handleClick={this.handleClickTab}/>
                </div>
                <div className="panel-content">

                    {
                        this.props.home.topics && this.props.home.topics.length && this.props.home.topics.map((item) => {

                            return (
                                <div className="topic" key={item.id}>
                                    <div className="avatar">
                                        <Link to={item.createBy.url}><img src={item.createBy.avatarUrl} alt={""} /></Link>
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
                                                            src={item.lastCommentBy.avatarUrl} alt={""} /> {item.lastCommentBy.username}
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
                        !this.props.home.topics.length && <div className="no-data">
                            暂无数据
                        </div>
                    }
                </div>
                <div className="panel-footer">
                    <Pagination paging={this.props.home.paging} handleClick={this.handleClickPage} />
                </div>
            </>
        );
    }
}

function mapStateToProps({home}) {

    return {
        home
    };
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        loadTopics: actions.loadTopics
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PageHome);
