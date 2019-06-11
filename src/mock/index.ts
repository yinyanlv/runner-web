import mock from './mock';
import './db/userDb';
import './db/topicListDb';

mock.onAny().passThrough();