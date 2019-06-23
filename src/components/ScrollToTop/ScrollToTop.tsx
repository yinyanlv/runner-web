import React from 'react';
import {Transition} from 'react-transition-group';
import './ScrollToTop.scss';

const duration = 500;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0
};

const transitionStyles = {
    entering: {opacity: 0},
    entered: {opacity: 1},
    exiting: {opacity: 0},
    exited: {opacity: 0}
};

interface ScrollToTopProps {
    scrollStepInPx: number;
    delayInMs?: number;
}

class ScrollToTop extends React.PureComponent<ScrollToTopProps> {

    state = {
        intervalId: 0,
        isShow: false
    };

    componentDidMount() {
        window.addEventListener('scroll', this.controlShow, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.controlShow, false);
    }

    controlShow = () => {
        if (window.scrollY > 0) {
            this.setState({
                isShow: true
            });
        } else {
            this.setState({
                isShow: false
            });
        }
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
            <Transition timeout={{
                enter: 0,
                exit: duration
            }} in={this.state.isShow} unmountOnExit={!this.state.isShow}>
                {
                    (state) => {
                        return <div
                            className="scroll-to-top"
                            onClick={this.handleClick}
                            style={{
                                ...defaultStyle, ...transitionStyles[state]
                            }}
                        >
                            <span>回到顶部</span>
                        </div>;
                    }
                }
            </Transition>
        );
    }
}

export default ScrollToTop;