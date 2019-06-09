import React from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import './Tabs.scss';

class Tabs extends React.PureComponent {
    state = {
        items: [{
            id: 'home',
            text: '首页',
            isActive: true,
            url: ''
        }, {
            id: 'about',
            text: '关于',
            isActive: false,
            url: ''
        }]
    };

    handleClickItem = (curItem) => {
        let result: any = [];
        this.state.items.forEach((item) => {
            if (curItem.id === item.id) {
                item.isActive = true;
            } else {
                item.isActive = false;
            }
            result.push(item);
        });
        this.setState({
            items: result
        });
    };

    render() {
        return (
            <div className="tabs">
                {this.state.items.map((item) => {
                    return <Link to={item.url} key={item.id} className={clsx({active: item.isActive})} onClick={() => {
                        this.handleClickItem(item);
                    }}>{item.text}</Link>;
                })}
            </div>
        );
    }
}

export default Tabs;