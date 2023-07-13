import React from 'react';
import s from './sortFilter.module.scss'
import {FilterPizza} from "./component/FilterPizza";
import SortPizza from "./component/sortPizza";

export const SortFilter = () => {

    return (
        <div className={s.search}>
            <FilterPizza  />
            <SortPizza   />
        </div>
    );
};


