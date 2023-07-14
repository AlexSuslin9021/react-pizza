import React from 'react';
import s from "../../app/app.module.scss";
import Header from "../component/header/header";
import {Outlet} from "react-router-dom";


export const Layout = () => {
    return (
        <div className={s.mainBlock}>
            <section className={s.container}>
                <Header/>
                <Outlet />
            </section>
        </div>
    );
};



