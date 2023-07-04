import React from 'react';
import s from './notFound.module.scss'

export const NotFound = () => {
    return (
        <div className={s.container} >

           <h2>Ничего не найдено 😕</h2>
            <p> К сожалению данная страница отсутствует в нашем интеренет-магазине </p>
        </div>
    );
};
