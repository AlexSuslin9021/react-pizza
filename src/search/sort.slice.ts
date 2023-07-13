import {createSlice} from "@reduxjs/toolkit";


const initialState: InitialStateType = {
    activeFilter: 0,
    category: {
        name: 'по популярности',
        sortProperty: 'rating'
    },
    searchValue: '',
    isActive:1
}
const slice = createSlice({
    name: 'menu',
    initialState: initialState,
    reducers: {
        setActiveFilter(state, action: { payload: number }) {
            state.activeFilter = action.payload
        },
        setCategory(state, action: { payload: { name: string, sortProperty: string } }) {
            state.category = action.payload
        },
        setSearchValue(state, action: { payload: string }) {
            state.searchValue = action.payload
        },
        setIsActive(state, action: { payload: number }) {
            state.isActive = action.payload
        }
    },

})

export const sort = slice.reducer
export const {setActiveFilter, setCategory,setSearchValue,setIsActive} = slice.actions
type InitialStateType = {
    activeFilter: number,
    category: {
        name: string,
        sortProperty: string,
    },
    searchValue: string,
    isActive:number
}
