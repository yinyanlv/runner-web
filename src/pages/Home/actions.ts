import axios from 'axios';
import {config} from '../../config';

export const HOME_LOAD = 'home:load';
export const HOME_LOADING = 'home:loading';
export const HOME_LOADED = 'home:loaded';

export function loadTopics(params) {
    return (dispatch) => {

        dispatch({
            type: HOME_LOADING,
            payload: true
        });

        axios.get(config.API_PREFIX + '/topic-list', params).then((res) => {

            dispatch({
                type: HOME_LOADING,
                payload: false
            });

            dispatch({
                type: HOME_LOADED,
                payload: {
                    topics: res.data,
                    paging: {
                        total: 500,
                        currentPage: params.page,
                        perPageNumber: 20,
                        baseUrl: ''
                    },
                    tab: params.tab
                }
            });
        });
    };
}
