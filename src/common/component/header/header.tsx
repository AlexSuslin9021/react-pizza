import React from 'react';
import logo from "../../image/logo/pizzaLogo.svg";
import cart from '../../image/logo/Rectangle 4.svg'
import line from '../../image/logo/iconfinder_shopping-cart_2561279 1.svg'
import s from './header.module.scss'
import Logo from "../logo/Logo";
import { useLocation, useNavigate} from "react-router-dom";
import {Search} from "./component/Search";
import {useAppSelector} from "../../../app/store";
import {itemsSelect} from "../../../cart/selectors";

const Header = () => {

    const navigate = useNavigate()
    const {totalPrice, items} = useAppSelector(itemsSelect)
    const onClickCart = () => {
        navigate('/cart')
    }
    const path = useLocation()
    return (
        <header className={s.header}>
            <Logo
                width={'60px'}
                height={'60px'}
                src={logo}
                description={'самая вкусная пицца вов вселенной'}
                header={'REACT PIZZA'}
            />
            {path.pathname==='/' &&  <Search/>}
            <div className={s.cart} onClick={onClickCart}>
                <span>{totalPrice} p</span>
                <img src={cart} alt="#"/>
                <img src={line} alt="#"/>
                <span>{items.length}</span>

            </div>
        </header>
    );
};

export default Header;

