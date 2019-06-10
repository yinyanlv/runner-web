import * as actions from './actions';

const initialState = {
    topics: [],
    isLoading: false
};

function home(state = initialState, action: any) {

    switch (action.type) {
        case actions.HOME_LOADED:

            return {
                ...state,
                topics: action.payload
            };
        case actions.HOME_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return state;
    }
}

export default home;