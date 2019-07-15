import axios from 'axios';
import {config} from '../../../config';

export const TOPIC_LOADED = 'topic:loaded';

export function loadTopic(topicId: string): (dispatch: any) => void {

    return (dispatch) => {

        axios.get(config.API_PREFIX + '/topic/' + topicId).then((res) => {

            dispatch({
                type: TOPIC_LOADED,
                payload: res.data
            });
        });
    };
}
