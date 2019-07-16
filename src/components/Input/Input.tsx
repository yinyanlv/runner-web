import React from 'react';
import {withFormsy} from 'formsy-react';
import clsx from 'clsx';

interface InputProps {
    label: string,
    type?: string,
    handleChange?: (e: any) => void;
    handleKeyUp?: (e: any) => void;
    getErrorMessage: () => string;
    setValue: (value: any) => void;
    getValue: () => any;
    isValid: () => boolean;
    required: boolean;
    isRequired: () => boolean;
    isPristine: () => boolean;
    showError: () => boolean;
}

class Input extends React.Component<InputProps> {

    handleKeyUp = (e: any) => {
        this.props.handleKeyUp && this.props.handleKeyUp(e);
    };

    handleChange = (e: any) => {
        this.props.setValue(e.currentTarget.value);
        this.props.handleChange && this.props.handleChange(e);
    };

    render() {
        const props = this.props;
        const errorMessage = props.getErrorMessage();
        let isShowError = props.showError();
        const type = props.type === 'password' ? 'password' : 'text';

        if (!isShowError) {
            if (props.required && props.getValue() === '' && !props.isPristine()) {
                isShowError = true;
            }
        }

        return (
            <>
                <div className="input-line">
                    <label>
                        {props.required && <span className="required">*</span>}{props.label}：
                    </label>
                    <div className="input-wrapper">
                        <input type={type}
                               className={clsx({"error": isShowError})}
                               value={props.getValue() || ''}
                               onChange={this.handleChange}
                               onKeyUp={this.handleKeyUp}/>
                    </div>
                </div>
                {
                    isShowError && <div className="error-line">
                        <div className="error-wrapper">
                            <i className="fa fa-exclamation-circle"></i>
                            <span>{errorMessage}</span>
                        </div>
                    </div>
                }
            </>
        );
    }
}

export default withFormsy(Input);
