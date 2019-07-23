import * as actions from './actions';

const initialState = {
    errorMessage: '',
    isRegistering: false,
    isGithubLogining: false
};

function register(state: any = initialState, action: any) {

    switch (action.type) {
        case actions.REGISTER_REGISTERING:
            return {
                ...state,
                isLogin: action.payload
            };
        case actions.REGISTER_SUCCESS:
            return {
                ...state,
                errorMessage: ''
            };
        case actions.REGISTER_ERROR:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export default register;
