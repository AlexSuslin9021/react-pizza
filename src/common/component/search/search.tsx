import React from 'react';
import s from './search.module.scss'
import {FilterPizza} from "./component/FilterPizza";
import SortPizza from "./component/sortPizza";

export const Search:React.FC<SearchType> = ({activeFilter, setActiveFilter}) => {

    return (
        <div className={s.search}>
            <FilterPizza activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
            <SortPizza/>
        </div>
    );
};


type SearchType={
    activeFilter:number,
    setActiveFilter:(value:number)=>void
}