import {createSlice} from "@reduxjs/toolkit";


const initialState:initialStateType={
    loader:false
}
const slice =createSlice({
    name:'app',
    initialState : initialState,
    reducers:{
        setLoader(state, action:{payload:boolean}){
         state.loader=action.payload
        }
    },


})
export const  appReducers=slice.reducer
export const {setLoader}=slice.actions
type initialStateType={
    loader:boolean
}