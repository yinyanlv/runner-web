export default {
    isLogined: function () {
        return !!this.getUserName();
    },
    setUser: function (user: any) {
        localStorage.setItem('user', JSON.stringify(user));
    },
    getUser: function (): any {
        return {};
        // return JSON.parse(localStorage.getItem('user')) || {};
    },
    removeUser: function () {
        localStorage.removeItem('user');
    },
    getUserId: function () {
        return this.getUser().id;
    },
    getUserName: function () {
        return this.getUser().username;
    },
    setToken: function (token: string) {
        localStorage.setItem('token', token);
    },
    getToken: function () {
        return localStorage.getItem('token');
    },
    removeToken: function () {
        localStorage.removeItem('token');
    }
}
