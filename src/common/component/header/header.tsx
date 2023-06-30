import React from 'react';
import logo from "../../image/logo/pizzaLogo.svg";
import cart from '../../image/logo/Rectangle 4.svg'
import line from '../../image/logo/iconfinder_shopping-cart_2561279 1.svg'
import s from './header.module.scss'


const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo} >
                <div><img src={logo} alt="#"/></div>
                <div >
                    <h4>REACT PIZZA</h4>
                    <p>самая вкусная пицца вов вселенной</p>
                </div>
            </div>
            <div className={s.cart} >
                <a href="https://vk.com/best_of_mma">price</a>
                 <img src={cart} alt="#"/>
                <img src={line} alt="#"/>
            </div>
        </header>
    );
};

export default Header;