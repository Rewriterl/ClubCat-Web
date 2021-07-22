import axios from 'axios'

axios.defaults.headers['X-Requestd-With'] = 'XMLHttpRequest'
// axios.defaults.headers['token'] =
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use(res => {
    if (typeof res.data !== 'object') {
        console.log('server error')
        return Promise.reject(res)
    }
    // if (res.data.code != 200){
    //
    // }
    // console.log(res.data)
    return res.data
})

export default axios
