import React from 'react';
import s from './emptyCart.module.scss'
import card from '../../../common/image/shopping-cart.svg'
import {Link} from "react-router-dom";

export const EmptyCart = () => {
    return (
        <div className={s.emptyCart}>
            <h3>Корзина пустая</h3>
            <p>Вероятней всего, вы не заказывали ещё пиццу.<br/>
                Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
            <img src={card} alt="#"/>
           <Link to={'/'}><button> Вернуться назад</button></Link>
        </div>
    );
};

