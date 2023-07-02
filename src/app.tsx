import React from 'react';
import s from './app.module.scss';
import {Menu} from "./menu/menu";
import Header from "./common/component/header/header";
import {Cart} from "./cart/cart";



function App() {
    return (
        <div className={s.mainBlock}>
            <section className={s.container}>
                <Header/>
                <Menu/>
                <Cart/>
            </section>
        </div>
    );
}

export default App;
