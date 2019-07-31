import * as actions from './actions';

const initialState = {
    id: 'abc',
    category: 'job',
    categoryName: '招聘',
    title: '这里是标题',
    content: `
        ### 这里是标题
        \`\`\` rust
            let a = 1;
            let a = 1;
            let a = 1;
        \`\`\` 
    `,
    createBy: 'admin',
    createUserAvatarUrl: '/static/images/avatars/avatar.jpg',
    createTime: '2018-11-11 11:11:11',
    commentCount: 2,
    viewCount: 22,
    lastCommentBy: 'admin',
    lastCommentTime: '2018-11-11 11:11:11',
    comments: [{
        id: '1',
        content: '### 写的不错',
        createBy: 'bugong',
        createTime: '2019-11-11 11:11:11',
        createUserAvatarUrl: '/static/images/avatars/avatar.jpg',
        comments: [{
            id: '1',
            content: '### 写的不错',
            createBy: 'bugong',
            createTime: '2019-12-12 11:11:11',
            createUserAvatarUrl: '/static/images/avatars/avatar.jpg',
            comments: [{
                id: '1',
                content: '### 写的不错',
                createBy: 'bugong',
                createTime: '2019-12-12 11:11:11',
                createUserAvatarUrl: '/static/images/avatars/avatar.jpg',
                comments: []
            }]
        }]
    }]
};

function topicDetail(state = initialState, action: any) {

    switch (action.type) {
        case actions.TOPIC_LOADED:

            return {
                ...state
            };
        default:
            return state;
    }
}

export default topicDetail;
