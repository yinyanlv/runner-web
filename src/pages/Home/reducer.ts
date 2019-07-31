import * as actions from './actions';

export const tabs = [{
    id: 'all',
    text: '全部',
    isActive: true,
    url: ''
}, {
    id: 'ask',
    text: '问答',
    isActive: false,
    url: ''
}, {
    id: 'share',
    text: '分享',
    isActive: false,
    url: ''
}, {
    id: 'job',
    text: '招聘',
    isActive: false,
    url: ''
}];

const initialState = {
    tabs,
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
                topics: action.payload.topics,
                tabs: getTabs(state.tabs, action.payload.tab),
                paging: action.payload.paging
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

function getTabs(tabs, tabId){
    let result: any = [];
    tabs && tabs.forEach((item) => {
        if (tabId === item.id) {
            item.isActive = true;
        } else {
            item.isActive = false;
        }
        result.push(item);
    });

    return result;
}

export default home;
