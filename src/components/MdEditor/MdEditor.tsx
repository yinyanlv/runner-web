import React from 'react';
import SimpleMdeEditor from 'react-simplemde-editor';
import {defaultOptions} from './options';

import './MdEditor.scss';

interface MdEditorProps {
    value: any;
    onChange: (value: any) => void;
    options?: any;
}

class MdEditor extends React.PureComponent<MdEditorProps> {

    render() {
        return (
            <SimpleMdeEditor
                value={this.props.value}
                options={this.props.options ? this.props.options : defaultOptions}
                onChange={this.props.onChange}
            />
        );
    }
}

export default MdEditor;