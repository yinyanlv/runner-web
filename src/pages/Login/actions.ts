import jwtService from '../../services/jwtService';
import history from '../../history';
import {USER_SET_USER_DATA} from '../../store/user/user.actions';

export const LOGIN_LOGINING = 'login:logining';
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
                        role: user.role,
                        username: user.username,
                        authorized: true
                    }
                });

                dispatch({
                    type: LOGIN_LOGINING,
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
