import React from 'react';
import ReactMarkdown from 'react-markdown';
import ReactHighlight from 'react-highlight';

const CodeRender = props => {
    return (
        <ReactHighlight className={props.language}>{props.value}</ReactHighlight>
    );
};

interface MdViewProps {
    data: any;
}

class MdView extends React.PureComponent<MdViewProps> {

    render() {

        return (
            <ReactMarkdown
                source={this.props.data}
                renderers={{
                    code: CodeRender
                }}
                escapeHtml={false}
            />
        );
    }
}

export default MdView;
