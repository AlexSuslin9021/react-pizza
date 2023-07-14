import React from 'react';
import s from "../style.module.scss";


export const PriceAndAdd:React.FC<ButtonAddType> = ({name,callback, price, countPizza}) => {

    return (
    <div className={s.price}>
        <span> {price}</span>
        <button onClick={callback}> + Добавить <span>{countPizza>0 && countPizza }</span> </button>
    </div>
    );
};

type ButtonAddType={
    name:string
    callback?:()=>void
    price:number
    countPizza:number
}