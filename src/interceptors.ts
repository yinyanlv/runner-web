import axios from 'axios';

axios.interceptors.request.use((req) => {
    return req;
});

axios.interceptors.response.use((res) => {
    console.log(res);
    return res;
}, (err) => {

    return new Promise((resolve, reject) => {

        if (err.response.status === 401) {

        }

        throw err;
    });
});

