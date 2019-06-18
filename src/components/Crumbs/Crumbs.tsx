import React from 'react';
import {Link} from 'react-router-dom';
import './Crumbs.scss';

interface CrumbsProps {
    items: any;
}

export default function Crumbs(props: CrumbsProps) {
    return (
        <div className="crumbs">
            {
                props.items.map((item, index) => {
                    if (index + 1 === props.items.length) {
                        return <span className="current" key={''}>{item.text}</span>;
                    } else {
                        return <React.Fragment key={item.url}>
                            <Link to={item.url}>{item.text}</Link>
                            <span className="divider">/</span>
                        </React.Fragment>;
                    }
                })
            }
        </div>
    );
}
