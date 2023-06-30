import React from 'react';
import s from "../style.module.scss";

export const PriceAndAdd:React.FC<ButtonAddType> = ({name,callback, price}) => {
    const onClickHandler=()=>{
       callback &&  callback()
    }
    return (
    <div className={s.price}>
        <span> {price}</span>
        <button onClick={onClickHandler}> + Добавить </button>
    </div>
    );
};

type ButtonAddType={
    name:string
    callback?:()=>void
    price:string
}