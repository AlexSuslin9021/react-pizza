import {createSlice} from "@reduxjs/toolkit";


const initialState:initialStateType={
    loader:false,
    error:''
}
const slice =createSlice({
    name:'app',
    initialState : initialState,
    reducers:{
        setLoader(state, action:{payload:boolean}){
         state.loader=action.payload
        },
        setError(state, action:{payload:string}){
            state.error=action.payload
        }
    },


})
export const  appReducers=slice.reducer
export const {setLoader, setError}=slice.actions
type initialStateType={
    loader:boolean
    error:string
}