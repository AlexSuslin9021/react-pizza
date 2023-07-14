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
            const foundItem = state.items.find((i) => i.id === action.payload.id);
            const newItem = action.payload;
            if(foundItem){
                foundItem.count++
            }else{
                action.payload.count=1
                state.items.push(newItem);

            }

            state.totalPrice += newItem.price;
        },
        removeItem(state, action: { payload: number }){
            const index = state.items.findIndex((i) => i.id === action.payload);
            if (index !== -1) {
                state.totalPrice -= state.items[index].price;
                state.items.splice(index, 1);
            }
        },
        clearCart(state) {
            state.items = []
            state.totalPrice=0
        },
        addOnePizza(state, action: { payload: number }){
            const findIndex = state.items.findIndex((i) => i.id === action.payload);
           if(findIndex!==-1) {
               state.items[findIndex].count++
               state.totalPrice+=state.items[findIndex].price
           }
           },
        deleteOnePizza(state, action: { payload: number }){
            const findIndex = state.items.findIndex((i) => i.id === action.payload);
            if(findIndex!==-1) {
                state.items[findIndex].count--
                state.totalPrice-=state.items[findIndex].price
            }
            if(state.items[findIndex].count===0){
                state.items.splice(findIndex, 1);
            }
        }
    },

})

export const cart = slice.reducer
export const {deleteOnePizza,addItemInCart,removeItem,addOnePizza,clearCart} = slice.actions

type InitialStateType = {
    totalPrice: number,
    items: ItemProps []
}