import React from 'react';
import {Item} from "./common/items";
import s from './style.module.scss'
import {Search} from "../common/component/search/search";
import {useAppSelector} from "../app/store";

export const Menu = () => {
    const allPizza = useAppSelector(state => state.menuReducer)
    return (
        <>
            <Search/>
            <div className={s.menuContainer}>
                {allPizza.map((el) => {
                    return <Item key={el.id}
                                 title={el.title}
                                 category={el.category}
                                 price={el.price}
                                 sizes={el.sizes}
                                 id={el.id}
                                 imageUrl={el.imageUrl}
                                 types={el.types}
                                 rating={el.rating}
                    />
                })}


            </div>
        </>


    );
};

