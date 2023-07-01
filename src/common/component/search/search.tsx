import React from 'react';
import s from './search.module.scss'

export const Search = () => {
    return (
        <div className={s.search}>
            <div className={s.filter}>
                <button>Все</button>
                <button>Мясные</button>
                <button>Вегетарианская</button>
                <button>Гриль</button>
                <button>Острые</button>
                <button>Закрытые</button>
            </div>
            <div className={s.sort}>
                <span>Сортировать по: популярности </span>
            </div>
        </div>
    );
};

