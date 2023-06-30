import React from 'react';
import {Item} from "./common/items";

import style from "../app.module.scss";

export const Menu = () => {
    return (
        <div className={ style.mainBlock} >
            <section className={style.container}>
            <Item/>
            <Item/>
            <Item/>
            <Item/>


        </section>
        </div>
    );
};

