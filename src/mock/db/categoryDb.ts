import mock from '../mock';

const categoryDb = {
    categories: [{
        code: 'share',
        name: '分享'
    }, {
        code: 'ask',
        name: '问答'
    }, {
        code: 'job',
        name: '招聘'
    }]
};

mock.onGet('/api/category-list').reply(() => {
    return [200, categoryDb.categories];
});