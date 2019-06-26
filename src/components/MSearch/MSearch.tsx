import React from 'react';
import './MSearch.scss';

class MSearch extends React.PureComponent {

    render() {
        return (
            <div className="m-search">
                <div className="search">
                    <input className="input-search" type="search" name="keyword" placeholder="请输入关键字"/>
                    <span className="btn btn-search"><i className="fa fa-search"></i></span>
                </div>
            </div>
        );
    }
}

export default MSearch;