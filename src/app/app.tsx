import React, {useState} from 'react';
import s from './app.module.scss';
import { Routes, Route } from 'react-router-dom';
import { Menu } from '../menu/menu';
import Header from '../common/component/header/header';
import { Cart } from '../cart/cart';
import {EmptyCart} from "../cart/component/EmptyCart/emptyCart";
import {NotFound} from "../common/component/notFound/notFound";

function App() {
    const[searchValue,setSearchValue]=useState('');
    console.log(searchValue)
    return (
        <div className={s.mainBlock}>
            <section className={s.container}>
                <Header searchValue={searchValue} setSearchValue={setSearchValue}   />
                <Routes>
                    <Route path="/" element={<Menu />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/cart-empty" element={<EmptyCart />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </section>
        </div>
    );
}


export default App;
