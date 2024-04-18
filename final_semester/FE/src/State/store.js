import { configureStore } from "@reduxjs/toolkit";
import { reducer as authReducers } from "./auth";
import { reducer as MovieReducers } from "./movie";
export const store = configureStore({
    reducer:{
        auth:authReducers,
        movie:MovieReducers
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware()
})

