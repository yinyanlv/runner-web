import mock from '../mock';

const userDb = {
    users: [{
        username: 'admin',
        password: '111111'
    }]
};

mock.onPost('/api/login').reply((req) => {
    const data = JSON.parse(req.data);
    let result;

    if (data.username === 'admin' && data.password === '111111') {
        result = {
            success: true
        };
    } else {
        result = {
            success: false,
            message: '用户名或密码错误'
        };
    }

    return [200, result];
});