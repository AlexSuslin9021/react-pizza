import {createSlice} from "@reduxjs/toolkit";
import {ItemProps} from "../menu/common/items";


const initialState: InitialStateType = {
    totalPrice: 0,
    items: []
}
const slice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItemInCart(state, action: { payload: ItemProps }) {
            const newItem = action.payload;
            state.items.push(newItem);
            state.totalPrice += newItem.price;

        },

    },

})

export const cart = slice.reducer
export const {addItemInCart} = slice.actions

type InitialStateType = {
    totalPrice: number,
    items: ItemProps []
}