import {RootState} from "../app/store";

export const activeFilterSelect =(state:RootState) => state.sort.activeFilter
export const categorySelect =(state:RootState) => state.sort.category