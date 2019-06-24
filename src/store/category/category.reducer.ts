import * as actions from './category.actions';

const initialState = {
    categories: []
};

function category(state = initialState, action) {

    switch(action.type) {

        case actions.CATEGORY_LOADED:
            return {
                ...state,
                categories: action.payload
            };
        default:
            return state;
    }
}

export default category;