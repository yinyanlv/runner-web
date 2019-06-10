import axios from 'axios';

export const HOME_LOAD = 'home load';
export const HOME_LOADING = 'home loading';
export const HOME_LOADED = 'home loaded';

export function loadTopics() {

    return (dispatch) => {

        dispatch({
            type: HOME_LOADING,
            payload: true
        });

        axios.get('/api/topic-list').then((res) => {

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
