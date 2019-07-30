import * as actions from './user.actions';

const initialState = {
    username: '',
    authorized: false,
    role: 'guest'
};

function user(state = initialState, action) {

    switch (action.type) {

        case actions.USER_SET_USER_DATA:

            return {
                ...action.payload
            };
        case actions.USER_RESET_USER_DATA:

            return initialState;
        default:
            return state;
    }
}

export default user;
