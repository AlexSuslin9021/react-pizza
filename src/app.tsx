import React from 'react';
import s from './app.module.scss';
import {Menu} from "./Menu/menu";
import logo from './common/image/logo/pizzaLogo.svg'


function App() {
    return (
        <div className={s.mainBlock}>
            <section className={s.container}>
                <header>
                    <div>
                        <div><img src={logo} alt=""/></div>
                        <div>
                            <h2>REACT PIZZA</h2>
                            <p>самая вкусная пицца вов вселенной</p>
                        </div>
                    </div>
                    <div></div>
                </header>
                <Menu/>
            </section>
        </div>
    );
}

export default App;
