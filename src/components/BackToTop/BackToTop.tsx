import React from 'react';
import './BackToTop.scss';

class BackToTop extends React.PureComponent {

    render() {

        return (
            <div className="back-to-top" id="back-to-top">
                <span>回到顶部</span>
            </div>
        );
    }
}

export default BackToTop;