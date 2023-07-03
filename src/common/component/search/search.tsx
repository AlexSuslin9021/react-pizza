import React from 'react';
import s from './search.module.scss'

export const Search = () => {
    return (
        <div className={s.search}>
            <ul className={s.filter}>
                <li>Все</li>
                <li>Мясные</li>
                <li>Вегетарианская</li>
                <li>Гриль</li>
                <li>Острые</li>
                <li>Закрытые</li>
            </ul>
            <div className={s.sort}>
                <span>Сортировать по: популярности </span>
            </div>
        </div>
    );
};

