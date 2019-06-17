import React from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import './Tabs.scss';

interface TabsProps {
    items: any[];
    handleClick: any;
}

class Tabs extends React.PureComponent<TabsProps> {
    render() {
        return (
            <div className="tabs">
                {this.props.items.map((item) => {
                    return <Link to={item.url} key={item.id} className={clsx({active: item.isActive})} onClick={() => {
                        this.props.handleClick(item);
                    }}>{item.text}</Link>;
                })}
            </div>
        );
    }
}

export default Tabs;