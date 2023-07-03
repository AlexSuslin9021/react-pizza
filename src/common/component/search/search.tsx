import React from 'react';
import s from './search.module.scss'
import FilterPizza from "./component/FilterPizza";
import SortPizza from "./component/sortPizza";

export const Search = () => {

    return (
        <div className={s.search}>
            <FilterPizza/>
            <SortPizza/>
        </div>
    );
};

