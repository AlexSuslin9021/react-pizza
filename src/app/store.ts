import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import {menuReducer} from "../menu/menu.slice";
import {sort} from "../search/sort.slice";
import {appReducers} from "./app.slice";
import {cart} from "../cart/cart.slice";
import {pizza} from "../onePizza/pizza.slice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";


const persistConfig={
    key:'root',
    version:1,
    storage
}
const reducer=combineReducers({
    appReducers,
    menuReducer,
    sort,
    cart,
    pizza,
})
const persistReducers=persistReducer(persistConfig,reducer)
export const store = configureStore({
    reducer:persistReducers,
});
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;