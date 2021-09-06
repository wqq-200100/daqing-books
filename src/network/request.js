import axios from "axios";

export function request(config) {
    const instance = axios.create({
        baseURL: 'https://api.shop.eduwork.cn',
        timeout: 10000
    })

    //请求拦截---------------
    instance.interceptors.request.use(config => {
        //如果 有一个接口需要认证才可以访问，在这统一设置

        // 直接放行
        return config;
    }, error => {
    })

    //响应拦截---------------
    instance.interceptors.response.use(res => {
        // console.log(res);
        return res.data ? res.data : res;
    }, error => {
        // 如果有需要授权才可以访问的接口，统一去login授权

        // 如果有错误 这里会处理，显示错误信息
    })
    return instance(config);
}