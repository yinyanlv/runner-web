import * as actions from './actions';

const initialState = {
    errorMessage: '',
    isLogining: false,
    isGithubLogining: false
};

function login(state: any = initialState, action: any) {

    switch (action.type) {
        case actions.LOGIN_LOGINING:
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
