import React from 'react';
import s from './style.module.scss'
import {ItemCart} from "./component/ItemCart";
import {useAppSelector} from "../app/store";
import {itemsSelect} from "./selectors";
import {EmptyCart} from "./component/EmptyCart/emptyCart";


export const Cart = () => {
    const {items} = useAppSelector(itemsSelect)
    return (

        <div className={s.cartContainer}>
            {items.length ? <>
                    <div className={s.headerCart}>
                        <h3>Корзина</h3>
                        <span> Очистить корзину</span>
                    </div>
                    <ItemCart/>
                </>
                : <EmptyCart/>} </div>
    );
};

