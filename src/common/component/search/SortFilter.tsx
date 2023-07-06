import React from 'react';
import s from './sortFilter.module.scss'
import {FilterPizza} from "./component/FilterPizza";
import SortPizza from "./component/sortPizza";

export const SortFilter:React.FC<SearchType> = ({activeFilter, setActiveFilter, category,setCategory}) => {

    return (
        <div className={s.search}>
            <FilterPizza activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
            <SortPizza category={category} setCategory={setCategory} />
        </div>
    );
};


type SearchType={
    activeFilter:number,
    setActiveFilter:(value:number)=>void
    category:any
    setCategory:any
}