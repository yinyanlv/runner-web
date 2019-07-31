import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {EventEmitter} from '../utils/EventEmitter';
import {config} from '../config';

class JwtService extends EventEmitter {

    init(): void {

        this._setInterceptors();
        this._handleAuthentication();
    }

    private _setInterceptors(): void {

        axios.interceptors.response.use((res) => {
            return res;
        }, (err) => {

            return new Promise((resolve, reject) => {

                if (err.response.status === 401) {
                    this.emit('unauthorized', 'invalid access token!');
                    this._clearSession();
                }

                throw err;
            });
        });
    }

    private _handleAuthentication(): void {

        const accessToken = this._getAccessToken();

        if (!accessToken) {
            return;
        }

        if (this._isAccessTokenValid(accessToken)) {
            this._setSession(accessToken);
            this.emit('authorized', true);
        } else {
            this._clearSession();
            this.emit('unauthorized', 'invalid access token!');
        }
    }

    private _setSession(accessToken: string | null): void {

        if (accessToken) {
            localStorage.setItem('jwt_access_token', accessToken);
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        } else {
            localStorage.removeItem('jwt_access_token');
            delete axios.defaults.headers.common['Authorization'];
        }
    }

    private _clearSession() {
        this._setSession(null);
    }

    loginWithAccessToken(): Promise<any> {

        return new Promise((resolve, reject) => {
            axios.get(config.API_PREFIX + '/auth-token', {
                data: {
                    accessToken: this._getAccessToken()
                }
            })
                .then((res) => {
                    if (res.data.success) {
                        this._setSession(res.data.data.accessToken);
                        resolve(res.data.data.user);
                    } else {
                        reject(res.data.data.error);
                    }
                });
        });
    }

    loginWithUsernameAndPassword({username, password}): Promise<any> {

        return new Promise((resolve, reject) => {
            axios.post('/api/login', {
                username,
                password
            }).then((res) => {
                if (res.data.success) {

                    this._setSession(res.data.data.accessToken);
                    resolve(res.data.data.user);
                } else {
                    reject(res.data.error);
                }
            });
        });
    }

    logout(): void {
        this._clearSession();
    }

    private _isAccessTokenValid(accessToken: string): boolean {

        if (!accessToken) {
            return false;
        }

        const decoded: any = jwtDecode(accessToken);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            console.warn('access token expired!');
            return false;
        } else {
            return true;
        }
    }

    private _getAccessToken(): string | null {
        return localStorage.getItem('jwt_access_token');
    }
}

export default new JwtService();
