import React, {useEffect, useRef, useState} from 'react';
import s from "../sortFilter.module.scss";
import {Modal} from "../../common/component/modal/modal";


const SortPizza: React.FC<SortPizzaType> = ({category, setCategory}) => {
    const [open, setOpen] = useState(false)
    const modalRef=useRef<HTMLDivElement>(null)
    useEffect(()=>{
        const handleClick=(event:any)=>{
            if (modalRef.current && !modalRef.current.contains(event.target)){
                setOpen(false)
            }
        }
        document.body.addEventListener('click', handleClick)
        return ()=>{
            document.body.removeEventListener('click', handleClick)
        }
    },[])
    const onClickHandler = () => { setOpen(!open) }
    const onClickChangeSort = (value: any) => {
        setCategory(value)
        setOpen(false)
    }
    return (
        <div ref={modalRef}  className={s.sort}>
            <span>Сортировать по: <span onClick={onClickHandler} className={s.changeSort}>{category.name}</span></span>
            {open && <Modal category={category} callback={onClickChangeSort}/> }
        </div>
    );
};

export default SortPizza;
type SortPizzaType = {
    category: any
    setCategory: any
}