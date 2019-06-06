import axios from 'axios';
import history from '../../history';

export const LOGIN_INPUT_USERNAME = 'INPUT USERNAME';
export const LOGIN_INPUT_PASSWORD = 'INPUT PASSWORD';
export const LOGIN_LOGINNING = 'LOGIN LOGINNING';
export const LOGIN_SUCCESS = 'LOGIN SUCCESS';
export const LOGIN_ERROR = 'LOGIN ERROR';

export function submitLogin({username, password}) {

    return (dispatch) => {

        axios.post('/api/login', {
            username,
            password
        }).then((res) => {

            dispatch({
                type: LOGIN_LOGINNING,
                payload: false
            });

            if (res.data.success) {

                dispatch({
                    type: LOGIN_SUCCESS
                });

                history.push('/');
            } else {
               dispatch({
                   type: LOGIN_ERROR,
                   payload: {
                       errorMessage: res.data.message
                   }
               });
            }
        });
    };
}