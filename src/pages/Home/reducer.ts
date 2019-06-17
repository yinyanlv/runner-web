import * as actions from './actions';

const initialState = {
    tabs: [{
        id: 'home',
        text: '首页',
        isActive: true,
        url: ''
    }, {
        id: 'about',
        text: '关于',
        isActive: false,
        url: ''
    }],
    topics: [],
    paging: {
        total: 500,
        currentPage: 1,
        perPageNumber: 20,
        baseUrl: ''
    },
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
        case actions.HOME_CHANGE_TAB:
            return {
                ...state,
                tabs: getTabs(state.tabs, action.payload)
            };
        case actions.HOME_CHANGE_PAGE:
            return {
                ...state,
                paging: {
                    ...state.paging,
                    currentPage: action.payload.page
                }
            };
        default:
            return state;
    }
}

function getTabs(tabs, curItem){

    let result: any = [];
    tabs && tabs.forEach((item) => {
        if (curItem.id === item.id) {
            item.isActive = true;
        } else {
            item.isActive = false;
        }
        result.push(item);
    });

    return result;
}

export default home;