import React, {useState} from 'react';
import s from "../search.module.scss";
import {Modal} from "../../modal/modal";

const SortPizza = () => {
    const [open,setOpen]=useState(false)
    const [category,setCategory]=useState('популярности')
    const onClickHandler=()=>{
        setOpen(!open)}
    const onClickChangeSort=(value:string)=>{
        setCategory(value)
        setOpen(false)
    }
    return (
        <div className={s.sort}>
            <span>Сортировать по: <span onClick={onClickHandler} className={s.changeSort}>{category}</span></span>
            {open && <Modal callback={onClickChangeSort}/>}
        </div>
    );
};

export default SortPizza;