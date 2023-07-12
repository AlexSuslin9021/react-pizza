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
        removeItem(state, action: { payload: number }){
            const index = state.items.findIndex((i) => i.id === action.payload);
            if (index !== -1) {
                state.totalPrice -= state.items[index].price;
                state.items.splice(index, 1);
            }
        },
        clearCart(state, action: { payload: ItemProps }) {
            state.items = []
        },
        addOnePizza(state, action: { payload: number }){

        }
    },

})

export const cart = slice.reducer
export const {addItemInCart,removeItem} = slice.actions

type InitialStateType = {
    totalPrice: number,
    items: ItemProps []
}