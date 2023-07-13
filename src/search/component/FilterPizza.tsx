import React from 'react';
import s from "../sortFilter.module.scss";
import {setActiveFilter} from "../sort.slice";
import {useAppDispatch} from "../../common/hooks/useAppDispatch";
import {useAppSelector} from "../../app/store";
import {activeFilterSelect} from "../selectors";

export const FilterPizza = () => {
    const dispatch=useAppDispatch()
    const onClickFilter = (id: number) => { dispatch(setActiveFilter(id)) }
    const activeFilter =useAppSelector(activeFilterSelect)
    const categorys=[
        {id:0, category:'Все'},
        {id:2, category:'Мясные'},
        {id:3, category:'Вегетарианская'},
        {id:4, category:'Гриль'},
        {id:5, category:'Острые'},
        {id:6, category:'Закрытые'},
    ]

    return (
        <ul className={s.filter}>
            {categorys.map((el)=>{
                return <li key={el.id} onClick={()=>onClickFilter(el.id)} className={activeFilter ===el.id ? s.active :''}>{el.category}</li>
            })}
        </ul>
    );
};

