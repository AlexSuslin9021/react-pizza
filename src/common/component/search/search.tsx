import React, {useState} from 'react';
import s from './search.module.scss'

export const Search = () => {
    const [activeItem, setActivItem]=useState(0)

    const categorys=[
        {id:0, category:'Все'},
        {id:2, category:'Мясные'},
        {id:3, category:'Вегетарианская'},
        {id:4, category:'Гриль'},
        {id:5, category:'Острые'},
        {id:6, category:'Закрытые'},
    ]
    const onClick =(index:number)=>{setActivItem(index)}
    return (
        <div className={s.search}>
            <ul className={s.filter}>
                {categorys.map((el)=>{
                    return <li key={el.id} onClick={()=>onClick(el.id)} className={activeItem ===el.id ? s.active :''}>{el.category}</li>
                })}
            </ul>
            <div className={s.sort}>
                <span>Сортировать по: популярности </span>
            </div>
        </div>
    );
};

