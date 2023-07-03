import React from 'react';
import s from './emptyCart.module.scss'
import card from '../../../common/image/shopping-cart.svg'

export const EmptyCart = () => {
    return (
        <div className={s.emptyCart}>
            <h3>Корзина пустая</h3>
            <p>Вероятней всего, вы не заказывали ещё пиццу.<br/>
                Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
            <img src={card} alt="#"/>
            <button> Вернуться назад</button>
        </div>
    );
};

