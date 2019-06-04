import React from 'react';
import './MobileSearch.scss';

class MobileSearch extends React.PureComponent {

    render() {
        return (
            <div className="m-search">
                <div className="search">
                    <input className="input-search" type="search" name="keyword" placeholder="请输入关键字"/>
                    <a className="btn btn-search" href="javascript:;"><i className="fa fa-search"></i></a>
                </div>
            </div>
        );
    }
}

export default MobileSearch;