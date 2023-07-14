import {PizzaType} from "../menu/api.menu";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {setError, setLoader} from "../app/app.slice";
import axios from "axios";

const pizzaState: PizzaType = {
    "id": 10,
    "imageUrl": 'string',
    "title": 'Сыр',
    "types": [1, 2],
    "sizes": [4, 5],
    "price": 500,
    "category": 2,
    "rating": 5,
    count:3
}
const slice = createSlice({
    name: 'pizza',
    initialState: pizzaState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOnePizza.fulfilled, (state, action) => {
            return action.payload
        });

    },


})
export const getOnePizza = createAsyncThunk("pizza/getOnePizza", async (id:number
    , thunkAPI) => {
    const {dispatch} = thunkAPI
    try {
        dispatch(setLoader(true))
        const res = await axios.get(`https://64a3b031c3b509573b56686b.mockapi.io/Items/${id}`)
        return res.data
    } catch  (e: unknown) {
        if (e instanceof Error) {
            dispatch(setError(e.message));
        }
    } finally {
        dispatch(setLoader(false))
    }

});

export const pizza =slice.reducer
