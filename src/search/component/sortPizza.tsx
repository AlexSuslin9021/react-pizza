import React, {useEffect, useRef, useState} from 'react';
import s from "../sortFilter.module.scss";
import {Modal} from "../../common/component/modal/modal";
import {setCategory} from "../sort.slice";
import {useAppDispatch} from "../../common/hooks/useAppDispatch";
import {useAppSelector} from "../../app/store";
import {categorySelect} from "../selectors";


const SortPizza= () => {
    const [open, setOpen] = useState(false)
    const modalRef=useRef<HTMLDivElement>(null)
    const category=useAppSelector(categorySelect)
    const dispatch = useAppDispatch()
    const onClickSort = (value: any) => { dispatch( setCategory(value)) }
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
        onClickSort(value)
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
