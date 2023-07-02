import React from 'react';
import s from './style.module.scss'
import {ItemCart} from "./component/ItemCart";

export const Cart = () => {
    return (
        <section className={s.cartContainer}>
            <div >
                <h3>Корзина</h3>
                <span> Очистить корзину</span>
            </div>
            <ItemCart/>
        </section>
    );
};

