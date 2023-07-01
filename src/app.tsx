import React from 'react';
import s from './app.module.scss';
import {Menu} from "./Menu/menu";
import Header from "./common/component/header/header";



function App() {
    return (
        <div className={s.mainBlock}>
            <section className={s.container}>
                <Header/>
                <Menu/>
            </section>
        </div>
    );
}

export default App;
