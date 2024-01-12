import axios from 'axios'

const requ = axios.create({
  baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/',
  timeout: 5000
})

// 请求拦截器
requ.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))


// 响应拦截器
requ.interceptors.response.use(res => res.data, e => Promise.reject(e))

export default requ
