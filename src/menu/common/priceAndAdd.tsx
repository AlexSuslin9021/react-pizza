import React, {useState} from 'react';
import s from "../style.module.scss";

export const PriceAndAdd:React.FC<ButtonAddType> = ({name,callback, price}) => {
    const [countPizza, setCountPizza]= useState<number>(0)
    const onClickHandler=()=>{
        setCountPizza(countPizza+1)
    }
    return (
    <div className={s.price}>
        <span> {price}</span>
        <button onClick={onClickHandler}> + Добавить <i>{countPizza>0 && countPizza }</i> </button>
    </div>
    );
};

type ButtonAddType={
    name:string
    callback?:()=>void
    price:string
}