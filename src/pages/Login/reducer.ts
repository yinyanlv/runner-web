import * as actions from './actions';

const initialState = {
    username: {
        value: '',
        invalid: false
    },
    password: {
        value: '',
        invalid: false
    },
    errorMessage: '',
    isLogin: false,
    isGithubLogin: false
};

function login(state: any = initialState, action: any) {

    switch (action.type) {
        case actions.LOGIN_INPUT_USERNAME:
            return {
                ...state,
                username: {
                    value: action.payload
                }
            };
        case actions.LOGIN_INPUT_PASSWORD:
            return {
                ...state,
                password: {
                    value: action.payload
                }
            };
        case actions.LOGIN_LOGINNING:
            return {
                ...state,
                isLogin: action.payload
            };
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                errorMessage: ''
            };
        case actions.LOGIN_ERROR:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export default login;