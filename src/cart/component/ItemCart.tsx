import React from 'react';
import Logo from "../../common/component/Logo/Logo";
import pizza from '../../common/image/image 7.svg'
import s from '../style.module.scss'

export const ItemCart = () => {
    return (
        <div className={s.itemCart}>
            <Logo height={'80px'} width={'80px'} src={pizza} header={'name pizza'} description={'тонкое тесто'}/>
            <div className={s.count}>
                <button>-</button>
                <span>1</span>
                <button>+</button>
            </div>
            <div className={s.delete}>
                <span>700</span>
                <button>x</button>
            </div>
        </div>
    );
};

