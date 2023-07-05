import React from 'react';
import s from "../search.module.scss";

export const FilterPizza:React.FC<FilterPizza> = ({activeFilter,setActiveFilter}) => {

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
                return <li key={el.id} onClick={()=>setActiveFilter(el.id)} className={activeFilter ===el.id ? s.active :''}>{el.category}</li>
            })}
        </ul>
    );
};

type FilterPizza={
    activeFilter:number,
    setActiveFilter:(value:number)=>void
}