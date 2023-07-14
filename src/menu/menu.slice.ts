import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {PizzaType} from "./api.menu";
import axios from "axios";
import {setError, setLoader} from "../app/app.slice";

const menuState: PizzaType[] = []
const slice = createSlice({
    name: 'menu',
    initialState: menuState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPizza.fulfilled, (state, action) => {
            return action.payload
        });
    },
})

export const getPizza = createAsyncThunk<PizzaType[], ParamsType>("menu/getPizza", async (arg: ParamsType, thunkAPI) => {
    const {dispatch} = thunkAPI
    try {
        dispatch(setLoader(true))
        const res = await axios.get(`https://64a3b031c3b509573b56686b.mockapi.io/Items?page=${arg.isActive}&limit=4&${arg.filter}${arg.sort}`)
        return res.data
    } catch (e: unknown) {
        if (e instanceof Error) {
            dispatch(setError(e.message));
        }
    } finally {
        dispatch(setLoader(false))
    }
});


export const menuReducer = slice.reducer
type ParamsType = {
    isActive: number,
    filter: string,
    sort: string
}