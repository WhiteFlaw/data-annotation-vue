import axios from axios;

const service = axios.create({
    baseURL: `127.0.0.1:8081`,
    timeout: 10
})

service.interceptors.request.use(
    error => {
        console.log(`RequestError: `, error);
        return Promise.reject(error);
    }
)

service.interceptors.response.use(
    config => {
        config.headers['Content-Type'] = 'application/json';
    },
    response => {
        const res = response.data
        if (res.status === '200') {
            return res.data;
        } else if (res.status === '500') {
            if (res.data && Object.keys(res.data).length > 0) {
                console.log(`ErrorInResponse`);
                return res;
            } else {
                return res.msg;
            }
        }
    },
    error => {
        console.log(`ResponseError: `, error);
        return Promise.reject(error);
    }
)

export default service;