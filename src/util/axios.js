import axios from 'axios'

axios.defaults.baseURL = 'http://club.yeefire.cn'
axios.defaults.headers['X-Requestd-With'] = 'XMLHttpRequest'
// axios.defaults.headers['token'] =
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use(res => {
    if (typeof res.data !== 'object') {
        console.log('server error')
        return Promise.reject(res)
    }
    return res.data
},(error)=>{
    return Promise.reject(error)
})

export default axios
