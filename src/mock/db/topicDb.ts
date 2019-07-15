import mock from '../mock';

const topicDb = {
    topics: [{
        id: '1',
        category: '',
        categoryName: '精品',
        title: '这是标题',
        content: '这是内容',
        createBy: {
            avatarUrl: '/static/images/avatars/avatar.jpg',
            username: 'admin'
        },
        createTime: '2019-11-11 11:11',
        commentCount: 109,
        viewCount: 200,
        lastCommentBy: {
            avatarUrl: '/static/images/avatars/avatar.jpg',
            username: 'admin'
        },
        lastCommentTime: '2019-12-12 12:12',
        comments: [{
            createBy: 'admin',
            createTime: '2019-12-12 12:12',
            content: '评论内容'
        }]
    }, {
        id: '2',
        url: '',
        category: '',
        categoryName: '精品',
        title: '这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题',
        createBy: {
            url: '',
            avatarUrl: '/static/images/avatars/avatar.jpg',
            username: 'admin'
        },
        createTime: '2019-11-11 11:11',
        commentCount: 109,
        viewCount: 200,
        lastCommentBy: {
            url: '',
            avatarUrl: '/static/images/avatars/avatar.jpg',
            username: 'admin'
        },
        lastCommentTime: '2019-12-12 12:12'
    }]
};

mock.onGet('/api/topic-list').reply(() => {
    return [200, topicDb.topics];
});

mock.onGet(/\/api\/topic\/[a-zA-Z0-9]+/).reply((params) => {
    return [200, topicDb.topics[0]];
});

mock.onPost('/api/topic/save').reply((params) => {

    return [200, {
        success: true
    }];
});
