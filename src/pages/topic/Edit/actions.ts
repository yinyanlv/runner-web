import axios from 'axios';
import {config} from '../../../config';
import history from '../../../history';

export const TOPIC_CREATE = 'topic:create';

export function createTopic(params) {

    return (dispatch) => {
        axios.post(config.API_PREFIX + '/topic/save', params).then((res) => {

            console.log(res);
            history.push('/');
        });
    };
}
