import mock from '../mock';
import jwt from 'jsonwebtoken';

// eslint-disable-next-line
const _userDb = {
    users: [{
        username: 'admin',
        password: '111111'
    }]
};

const jwtConfig = {
    secret: 'runner-web',
    expiresIn: '1 days'  // 单位秒，如果使用字符串，可定义为days, hours等
};

mock.onPost('/api/login').reply((req) => {
    const data = JSON.parse(req.data);
    let result;

    if (data.username === 'admin' && data.password === '111111') {

        const accessToken = jwt.sign({username: data.username}, jwtConfig.secret, {expiresIn: jwtConfig.expiresIn});

        result = {
            success: true,
            data: {
                user: {
                    username: data.username,
                    role: 'admin'
                },
                accessToken: accessToken
            }
        };
    } else {
        result = {
            success: false,
            error: '用户名或密码错误'
        };
    }

    return [200, result];
});

mock.onGet('/api/auth-token').reply((req) => {
    const data = JSON.parse(req.data);
    const {accessToken} = data;

    try {
        const {username} = jwt.verify(accessToken, jwtConfig.secret) as any;
        const updatedAccessToken = jwt.sign({username}, jwtConfig.secret, {expiresIn: jwtConfig.expiresIn});

        return [200, {
            success: true,
            data: {
                accessToken: updatedAccessToken,
                user: {
                    username: username,
                    role: 'admin'
                }
            }
        }]

    } catch (err) {
        const error = 'invalid access token detected';

        return [401, {
            success: false,
            error
        }]
    }
});
