import {createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice({
    name:"auth",
    initialState:{
        login_state:false,
        user_info:{}
    },
    reducers:{
        login:(state,action)=>{
            state.login_state = true
            state.user_info = action.payload.data || action.payload.Data
        },
        logout:(state)=>{
            state.login_state = false
            state.user_info = {}
        }
    
    }
})

export const reducer = authSlice.reducer
export const {login,logout} = authSlice.actions