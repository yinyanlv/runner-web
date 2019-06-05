const initialState = {
    abc: 1
};

function home(state = initialState, action: any) {
    return Object.assign({}, state);
}

export default home;