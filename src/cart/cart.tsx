import React from 'react';
import s from './style.module.scss'
import {ItemCart} from "./component/ItemCart";
import {useAppSelector} from "../app/store";
import {itemsSelect} from "./selectors";
import {EmptyCart} from "./component/EmptyCart/emptyCart";
import {Count} from "./component/Count";
import {Button} from "../common/button/button";
import {useAppDispatch} from "../common/hooks/useAppDispatch";
import {clearCart} from "./cart.slice";
import {Link} from "react-router-dom";


export const Cart = () => {
    const {totalPrice, items} = useAppSelector(itemsSelect)
    const dispatch =useAppDispatch()
    const clearAllCart=()=>{
        dispatch(clearCart())
    }
    return (

        <div className={s.cartContainer}>
            {items.length ? <>
                    <div className={s.headerCart}>
                        <h3>Корзина</h3>
                        <span onClick={clearAllCart} >  Очистить корзину</span>
                    </div>
                    <ItemCart/>
                    <div className={s.count}>
                        <Count count={`${items.length} шт`} text={'Всего пицц:'} color={'black'} />
                        <Count count={totalPrice} text={'Сумма заказа:'} color={'#fe5f1e'} />
                    </div>

                <div className={s.count}>
                  <Link to={'/'}>  <Button color={'white'} name={'<  Вернуться назад'}/></Link>
                    <Button color={'orange'}  name={'Оплатить сейчас'}/>
                </div>
                </>
                : <EmptyCart/>} </div>
    );
};

