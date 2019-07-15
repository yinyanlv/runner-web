import * as actions from './actions';

const initialState = {
    id: '',
    category: '',
    categoryName: '',
    title: '',
    content: '',
    createBy: {
        avatarUrl: '',
        username: ''
    },
    createTime: '',
    commentCount: 0,
    viewCount: 0,
    lastCommentBy: {
        url: '',
        avatarUrl: '',
        username: ''
    },
    lastCommentTime: '',
    comments: []
};

function topicDetail(state = initialState, action: any) {

    switch (action.type) {
        case actions.TOPIC_LOADED:

            return {
                ...action.payload
            };
        default:
            return state;
    }
}

export default topicDetail;
