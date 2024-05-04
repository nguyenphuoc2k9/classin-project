import axios from "axios"
import {store} from "../state/config.js"
import { setLogin,setLogout } from "../state"
export const AxiosInstance = axios.create({
    baseURL:import.meta.env.VITE_BASE_URL || "http://localhost:4000/",
    timeout:10000
})
AxiosInstance.interceptors.request.use((config)=>{
    const {user,token} = store.getState()
    console.log(token)
    if(user && token){
        config.headers.Authorization = 'Bearer '+token
    }
    return config
})
AxiosInstance.interceptors.response.use((success)=>{
    return success
}, async (err)=>{
        console.log(err)
        if(err.status == 401){
            console.log(err.status)
            store.dispatch(setLogout())
        }
        return Promise.reject(err)
})