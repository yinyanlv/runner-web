import axios from 'axios';
import {config} from '../../config';

export const HOME_LOAD = 'home:load';
export const HOME_LOADING = 'home:loading';
export const HOME_LOADED = 'home:loaded';
export const HOME_CHANGE_TAB = 'home:change-tab';
export const HOME_CHANGE_PAGE = 'home:change-page';

export function loadTopics() {

    return (dispatch) => {

        dispatch({
            type: HOME_LOADING,
            payload: true
        });

        axios.get(config.API_PREFIX + '/topic-list').then((res) => {

            dispatch({
                type: HOME_LOADING,
                payload: false
            });

            dispatch({
                type: HOME_LOADED,
                payload: res.data
            });
        });
    };
}
