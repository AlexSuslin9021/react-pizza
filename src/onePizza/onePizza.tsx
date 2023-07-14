import React from 'react';
import {useAppSelector} from "../app/store";

import s from './onePizza.module.scss'
import {loaderSelect} from "../app/selectors";
import {LoaderPizza} from "../common/component/loader/loaderPizza";

export const OnePizza = () => {
    const pizza = useAppSelector(state => state.pizza)
    const loader = useAppSelector(loaderSelect)
    return (


        <div className={s.one}>
            {loader ? <LoaderPizza/> :
                <>
                    <img style={{width: '250px', height: '250px'}} src={pizza.imageUrl} alt="#"/>
                    <h2>{pizza.title}</h2>
                    <div>{pizza.price}</div>
                </>}
        </div>

    );
};

