import React, {useState} from 'react';
import s from "../style.module.scss";
import {useAppDispatch} from "../../common/hooks/useAppDispatch";
import {addItemInCart} from "../../cart/cart.slice";
import {useAppSelector} from "../../app/store";

export const PriceAndAdd:React.FC<ButtonAddType> = ({name,callback, price}) => {


    const [countPizza, setCountPizza]= useState<number>(0)


    return (
    <div className={s.price}>
        <span> {price}</span>
        <button onClick={callback}> + Добавить <i>{countPizza>0 && countPizza }</i> </button>
    </div>
    );
};

type ButtonAddType={
    name:string
    callback?:()=>void
    price:number
}