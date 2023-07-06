import React from 'react';
import s from '../header.module.scss'
import search from '../../../image/search.svg'
import close from '../../../image/logo/close.svg'
export const Search = () => {
    return (
        <div className={s.search}>
            <img className={s.logo} src={search} alt=""/>
            <input placeholder={'Поиск пиццы'}  className={s.input} type="text"/>
            <img className={s.close} src={close} alt=""/>
        </div>
    );
};
