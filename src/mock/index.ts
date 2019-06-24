import mock from './mock';
import './db/userDb';
import './db/topicDb';
import './db/categoryDb';

mock.onAny().passThrough();