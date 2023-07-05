import React, {useState} from 'react';
import s from "../search.module.scss";
import {Modal} from "../../modal/modal";

const SortPizza: React.FC<SortPizzaType> = ({category, setCategory}) => {
    const [open, setOpen] = useState(false)
    const list=[
        {name:'по популярности', sortProperty:'price'},
        {name:'по цене', sortProperty:'price'},
        {name:'по алфавиту', sortProperty:'price'},
    ]
    const onClickHandler = () => { setOpen(!open) }
    const onClickChangeSort = (value: any) => {
        setCategory(value)
        setOpen(false)
    }
    return (
        <div className={s.sort}>
            <span>Сортировать по: <span onClick={onClickHandler} className={s.changeSort}>{category.name}</span></span>
            {open && <Modal category={category} callback={onClickChangeSort}/>}
        </div>
    );
};

export default SortPizza;
type SortPizzaType = {
    category: any
    setCategory: any
}