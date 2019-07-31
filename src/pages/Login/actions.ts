import jwtService from '../../services/jwtService';
import {USER_SET_USER_DATA} from '../../store/user/user.actions';

export const LOGIN_LOGINING = 'login:logining';
export const LOGIN_SUCCESS = 'login:success';
export const LOGIN_ERROR = 'login:error';

export function submitLogin({username, password}, {location, history}) {

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

                const {state} = location;

                let pathname = '/';
                let search = '';
                let hash = '';

                if (state) {
                    pathname = state.redirectPathname ? state.redirectPathname : '/';
                    search = state.redirectSearch ? state.redirectSearch : '';
                    hash = state.redirectHash ? state.redirectHash : '';
                }

                history.push({
                    pathname,
                    search,
                    hash
                });
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
