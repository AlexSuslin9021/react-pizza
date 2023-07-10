import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {menuApi, PizzaType} from "./api.menu";

const menuState:PizzaType[]=[]
const slice =createSlice({
    name:'menu',
    initialState : menuState,
    reducers:{},
extraReducers:(builder) => {
        builder.addCase(getPizza.fulfilled,(state, action)=>{
            state=action.payload
        })
}
})

export const getPizza = createAsyncThunk("auth/login", (_, thunkAPI) => {
    return menuApi.getPizza().then((res) => {
        return res.data;
    });
});

export const  menuReducer=slice.reducer