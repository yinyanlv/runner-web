import React from 'react';
import './BackToTop.scss';

class BackToTop extends React.PureComponent {

    handleClick = () => {

    };

    render() {

        return (
            <div className="back-to-top" onClick={this.handleClick}>
                <span>回到顶部</span>
            </div>
        );
    }
}

export default BackToTop;