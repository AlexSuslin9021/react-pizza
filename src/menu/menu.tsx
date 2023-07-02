import React from 'react';
import {Item} from "./common/items";
import s from './style.module.scss'
import {Search} from "../common/component/search/search";

export const Menu = () => {
    return (
<>
    <Search/>
    <div className={s.menuContainer}   >
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>

    </div>
</>





    );
};

