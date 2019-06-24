import axios from 'axios';
import {config} from '../../config';

export const CATEGORY_LOADED = 'category:loaded';

export function loadCategories() {
    return (dispatch) => {

        axios.get(config.API_PREFIX + '/category-list')
            .then((res) => {

                dispatch({
                    type: CATEGORY_LOADED,
                    payload: res.data
                });
            });
    };
}