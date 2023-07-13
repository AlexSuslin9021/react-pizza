import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {menuApi, PizzaType} from "./api.menu";
import axios from "axios";
import {setLoader} from "../app/app.slice";

const menuState: PizzaType[] = []
const slice = createSlice({
    name: 'menu',
    initialState: menuState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPizza.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const getPizza = createAsyncThunk("menu/getPizza", async (arg: {
    isActive: number,
    filter: string,
    sort: string
}, thunkAPI) => {
    const{dispatch}=thunkAPI
    try {
        dispatch(setLoader(true))
        const res = await axios.get(`https://64a3b031c3b509573b56686b.mockapi.io/Items?page=${arg.isActive}&limit=4&${arg.filter}${arg.sort}`)
        return res.data
    }catch (e:any){
        console.log(e)
    }finally
    {
        dispatch(setLoader(false))
    }

});

export const menuReducer = slice.reducer