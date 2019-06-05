export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN SUCCESS';
export const LOGIN_ERROR = 'LOGIN ERROR';

export function login(data: any) {
    return {
        type: LOGIN,
        data
    };
}