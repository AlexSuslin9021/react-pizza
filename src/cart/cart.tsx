import React from 'react';
import s from './style.module.scss'
import {ItemCart} from "./component/ItemCart";

export const Cart = () => {
    return (
        <div className={s.cartContainer}>
            <div className={s.headerCart} >
                <h3>Корзина</h3>
                <span> Очистить корзину</span>
            </div>

            <ItemCart/>
          


        </div>
    );
};

