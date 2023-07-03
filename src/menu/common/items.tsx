import React from 'react';
import s from '../style.module.scss'

import {PriceAndAdd} from "./priceAndAdd";
import OptionPizza from "./optionPizza";

export const Item:React.FC<ItemProps> = ({id, imageUrl,price,title, types,sizes,category,rating}) => {
    return (

            <div className={s.item}>
            <div><img style={{width:'250px', height:'250px'}} src={imageUrl} alt="#"/></div>
            <div>{title}</div>
                <OptionPizza sizes={sizes} types={types}/>
                <PriceAndAdd price={price} name={'+ Добавить'}/>
            </div>

    );
};

type ItemProps={
    "id": number,
    "imageUrl": string,
    "title": string,
    "types": number[],
    "sizes": number[],
    "price": number,
    "category": number,
    "rating": number

}