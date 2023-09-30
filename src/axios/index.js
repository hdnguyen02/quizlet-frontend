import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8080/', 
    timeout: 2000
});

instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
            console.log(config.headers.Authorization)
        }
        return config
    },
    error => {
        return Promise.reject(error) 
    }
)

export default instance