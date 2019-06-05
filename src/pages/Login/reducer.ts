const initialState = {
    isLogin: false
};

function login(state: any = initialState, action: any) {
    console.log(state);
    return Object.assign({}, state);
}

export default login;