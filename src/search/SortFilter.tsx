import React, {memo} from 'react';
import {SortPizza} from "../menu/common/sortPizza";
import {FilterPizza} from "./component/FilterPizza";
import s from './sortFilter.module.scss'

 export const SortFilter = memo( () => {
    console.log('SortFilter');
    return (
        <div className={s.search}>
            <FilterPizza />
            <SortPizza />
        </div>
    );
});



