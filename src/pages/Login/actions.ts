import jwtService from '../../services/jwtService';
import history from '../../history';
import {USER_SET_USER_DATA} from '../../store/user/user.actions';

export const LOGIN_INPUT_USERNAME = 'login:input username';
export const LOGIN_INPUT_PASSWORD = 'login:input password';
export const LOGIN_LOGINNING = 'login:loginning';
export const LOGIN_SUCCESS = 'login:success';
export const LOGIN_ERROR = 'login:error';

export function submitLogin({username, password}) {

    return (dispatch) => {

        jwtService.loginWithUsernameAndPassword({
            username,
            password
        })
            .then((user) => {

                dispatch({
                    type: USER_SET_USER_DATA,
                    payload: {
                        username: user.username,
                        authorized: true
                    }
                });

                dispatch({
                    type: LOGIN_LOGINNING,
                    payload: false
                });

                dispatch({
                    type: LOGIN_SUCCESS
                });

                history.push('/');
            })
            .catch((err) => {
                dispatch({
                    type: LOGIN_ERROR,
                    payload: {
                        errorMessage: err
                    }
                });
            });
    };
}