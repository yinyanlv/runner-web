import React from 'react';
import './ScrollToTop.scss';

interface ScrollToTopProps {
    scrollStepInPx: number;
    delayInMs?: number;
}

class ScrollToTop extends React.PureComponent<ScrollToTopProps> {

    state = {
        intervalId: 0
    };

    handleClick = () => {

        this.scrollToTop();
    };

    scrollToTop() {
        const intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);

        this.setState({
            intervalId
        });
    }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
            return;
        }

        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    render() {

        return (
            <div className="scroll-to-top" onClick={this.handleClick}>
                <span>回到顶部</span>
            </div>
        );
    }
}

export default ScrollToTop;