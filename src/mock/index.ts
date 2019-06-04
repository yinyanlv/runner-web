import mock from './mock';
import './db/user-db';
import './db/topic-list-db';

mock.onAny().passThrough();