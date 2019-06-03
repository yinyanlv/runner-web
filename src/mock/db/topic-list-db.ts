import mock from '../mock';

const topicListDb = {
    topics: [{
        a: 1
    }]
};

mock.onGet('/api/topic-list').reply(() => {
    return [200, topicListDb.topics];
});