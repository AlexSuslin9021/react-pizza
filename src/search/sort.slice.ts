import { createSlice} from "@reduxjs/toolkit";


const initialState:InitialStateType={
    activeFilter:0,
    category:{
        name:'по популярности',
        sortProperty:'rating'
    }
}
const slice =createSlice({
    name:'menu',
    initialState : initialState,
    reducers:{
        setActiveFilter(state, action:{payload:number}){
            state.activeFilter=action.payload
        },
        setCategory(state, action:{payload:{ name: string, sortProperty: string}}){
            state.category=action.payload
        }
    },

})

export const sort = slice.reducer
export const {setActiveFilter, setCategory}=slice.actions
type InitialStateType= {
    activeFilter: number,
    category: {
        name: string,
        sortProperty: string,
    }
}
