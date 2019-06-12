import jwtService from '../../services/jwtService';
import history from '../../history';
import {USER_SET_USER_DATA} from '../../store/user/user.actions';

export const LOGIN_INPUT_USERNAME = 'INPUT USERNAME';
export const LOGIN_INPUT_PASSWORD = 'INPUT PASSWORD';
export const LOGIN_LOGINNING = 'LOGIN LOGINNING';
export const LOGIN_SUCCESS = 'LOGIN SUCCESS';
export const LOGIN_ERROR = 'LOGIN ERROR';

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