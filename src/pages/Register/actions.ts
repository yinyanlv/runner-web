import jwtService from '../../services/jwtService';
import history from '../../history';
import {USER_SET_USER_DATA} from '../../store/user/user.actions';
import * as loginActions from '../Login/actions';

export const REGISTER_REGISTERING = 'register:registering';
export const REGISTER_SUCCESS = 'register:success';
export const REGISTER_ERROR = 'register:error';

export function submitRegister({username, password}) {

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
                    type: loginActions.LOGIN_LOGINING,
                    payload: false
                });

                dispatch({
                    type: loginActions.LOGIN_SUCCESS
                });

                history.push('/');
            })
            .catch((err) => {
                dispatch({
                    type: loginActions.LOGIN_ERROR,
                    payload: {
                        errorMessage: err
                    }
                });
            });
    };
}
