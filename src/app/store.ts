import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useSelector } from "react-redux";
import {menuReducer} from "../menu/menu.slice";
import {sort} from "../search/sort.slice";


export const store = configureStore({
    reducer: {
        menuReducer,
        sort,
    },
});
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;