import React from 'react';
import {LoadingComponentProps} from 'react-loadable';
import './Loading.scss';

interface LoadingProps extends LoadingComponentProps {
}

class Loading extends React.PureComponent<LoadingProps> {

    render() {
        return (
            <></>
        );
    }
}

export default Loading;
