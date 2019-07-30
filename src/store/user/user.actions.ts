import jwtService from '../../services/jwtService';
import history from '../../history';

export const USER_SET_USER_DATA = 'user:set user data';
export const USER_RESET_USER_DATA = 'user:reset user data';

export function setUserData(user) {
    return (dispatch) => {
        dispatch({
            type: USER_SET_USER_DATA,
            payload: {
                role: user.role,
                username: user.username,
                authorized: true
            }
        });
    };
}

export function logout(): (dispatch: any) => void {

    return (dispatch) => {
        jwtService.logout();
        dispatch({
            type: USER_RESET_USER_DATA
        });
        history.push({
            pathname: '/login'
        });
    };
}