import React from 'react';
import s from '../style.module.scss'
import pizza from '../../common/image/image 6.svg'
import {PriceAndAdd} from "./priceAndAdd";
import OptionPizza from "./optionPizza";

export const Item = () => {
    return (

            <div className={s.item}>
            <div><img src={pizza} alt="#"/></div>
            <div>name</div>
                <OptionPizza/>
                <PriceAndAdd price={'400'} name={'+ Добавить'}/>
            </div>

    );
};

