import axios from 'axios'


export function request(config) {
    //创建axios实例
    const instance = axios.create({
        baseURL:'http://152.136.185.210:8000/api/w6',
        timeout:5000
    })

    //2.axios的拦截器
    //2.1请求拦截
    instance.interceptors.request.use(config => {
        // console.log(config);
        //1.比如config中的一些信息不符合服务器的要求

        //2.比如每次发送网络请求时，都希望在页面上显示一个请求图标
        
        //3.某些网络请求（比如登录(token)),必须携带一些特殊信息
        return config
    },err => {
        // console.log(err);
    })

    //2.2 响应拦截
    instance.interceptors.response.use(res => {
        // console.log(config);
        return res.data
    },err => {
        console.log(err);
    })


    3.//发送真正的网络请求
    return instance(config)
    
}
