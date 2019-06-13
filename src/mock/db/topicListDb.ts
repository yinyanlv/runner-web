import mock from '../mock';

const topicListDb = {
    topics: [{
        id: '1',
        url: '',
        category: '',
        categoryName: '精品',
        title: '这是标题',
        createBy: {
            url: '',
            avatarUrl: 'static/images/avatars/avatar.jpg',
            username: 'admin'
        },
        createTime: '2019-11-11 11:11',
        commentCount: 109,
        viewCount: 200,
        lastCommentBy: {
            url: '',
            avatarUrl: 'static/images/avatars/avatar.jpg',
            username: 'admin'
        },
        lastCommentTime: '2019-12-12 12:12'
    }, {
        id: '2',
        url: '',
        category: '',
        categoryName: '精品',
        title: '这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题',
        createBy: {
            url: '',
            avatarUrl: 'static/images/avatars/avatar.jpg',
            username: 'admin'
        },
        createTime: '2019-11-11 11:11',
        commentCount: 109,
        viewCount: 200,
        lastCommentBy: {
            url: '',
            avatarUrl: 'static/images/avatars/avatar.jpg',
            username: 'admin'
        },
        lastCommentTime: '2019-12-12 12:12'
    }]
};

mock.onGet('/api/topic-list').reply(() => {
    return [200, topicListDb.topics];
});