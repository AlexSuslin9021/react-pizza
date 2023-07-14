import React from 'react';
import {useAppSelector} from "../app/store";

import s from './onePizza.module.scss'

export const OnePizza = () => {
    const pizza = useAppSelector(state => state.pizza)
    return (
        <div className={s.one}>

            <img style={{width: '250px', height: '250px'}} src={pizza.imageUrl} alt="#"/>
            <h2>{pizza.title}</h2>
            <div>{pizza.price}</div>
        </div>
    );
};

