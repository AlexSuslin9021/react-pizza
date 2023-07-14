import React from 'react';
import s from './style.module.scss'
import {ItemCart} from "./component/ItemCart";
import {useAppSelector} from "../app/store";
import {itemsSelect} from "./selectors";
import {EmptyCart} from "./component/EmptyCart/emptyCart";
import {Count} from "./component/Count";
import {Button} from "../common/button/button";


export const Cart = () => {
    const {totalPrice, items} = useAppSelector(itemsSelect)
    return (

        <div className={s.cartContainer}>
            {items.length ? <>
                    <div className={s.headerCart}>
                        <h3>Корзина</h3>
                        <span> Очистить корзину</span>
                    </div>
                    <ItemCart/>
                    <div className={s.count}>
                        <Count count={`${items.length}`} text={'Всего пицц:'} color={'black'} />
                        <Count count={totalPrice} text={'Сумма заказа:'} color={'#fe5f1e'} />
                    </div>

                <div className={s.count}>
                    <Button color={'white'} name={'<  Вернуться назад'}/>
                    <Button color={'orange'}  name={'Оплатить сейчас'}/>
                </div>
                </>
                : <EmptyCart/>} </div>
    );
};

