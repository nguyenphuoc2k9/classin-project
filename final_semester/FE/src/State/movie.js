import {createSlice} from "@reduxjs/toolkit"

const MovieSlice = createSlice({
    name:"movie",
    initialState:{
        length:0,
        data:[

        ]
    },
    reducers:{
        set:(state,action)=>{
            state.length = action.payload.length
            state.data = action.payload.data
        },
        sortAs:(state)=>{
            state.data = state.data.sort((a,b)=>Number(a.time)-Number(b.time))
        },
        sortDS:(state)=>{
            state.data = state.data.sort((a,b)=>Number(b.time)-Number(a.time))
        },
        search:(state,action)=>{
            console.log(action)
            state.data = state.data.filter(movie=>movie.name.toLowerCase().includes(action.payload.toLowerCase()))
        }
    }
})

export const reducer = MovieSlice.reducer
export const {set,sortAs,sortDS,search} = MovieSlice.actions