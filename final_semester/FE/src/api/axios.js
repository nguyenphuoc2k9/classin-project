import axios from "axios"
import { APP_CONFIG } from "../config/APP_CONFIG.js"
import { login,logout } from "../State/auth.js"
import { store } from "../State/store"
const {auth: {login_state}} = store.getState()
export const AxiosInstance = axios.create({
    baseURL:APP_CONFIG.base,
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
})
const access_token = JSON.parse(localStorage.getItem("access_token"))
AxiosInstance.interceptors.request.use(function(config){
    console.log(login_state)
    if(access_token){
        config.headers['Authorization'] = "Bearer "+access_token
    }
    return config
})
// AxiosInstance.interceptors.response.use(function(res){
//     return res
// },async function(error){
//     if(error.code = 401 && error.url.includes("/movie")){
//         const access_token = localStorage.removeItem("access_token")
//         store.dispatch(logout())
//     }
//     return Promise.reject(error)
// })