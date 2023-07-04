import React from 'react';
import logo from "../../image/logo/pizzaLogo.svg";
import cart from '../../image/logo/Rectangle 4.svg'
import line from '../../image/logo/iconfinder_shopping-cart_2561279 1.svg'
import s from './header.module.scss'
import Logo from "../logo/Logo";
import {NavLink, useNavigate} from "react-router-dom";


const Header = () => {
    const navigate = useNavigate()
    const onClickCart = () => {
        navigate('/cart')
    }

    return (
        <header className={s.header}>
            <Logo
                width={'60px'}
                height={'60px'}
                src={logo}
                description={'самая вкусная пицца вов вселенной'}
                header={'REACT PIZZA'}

            />
            <div className={s.cart} onClick={onClickCart}>


                    <span>price</span>
                    <img src={cart} alt="#"/>
                    <img src={line} alt="#"/>
              
            </div>
        </header>
    );
};

export default Header;