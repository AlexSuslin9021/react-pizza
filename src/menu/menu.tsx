import React, {useEffect, useState} from 'react';
import {Item} from "./common/items";
import s from './style.module.scss'
import {SortFilter} from "../search/SortFilter";
import {LoaderPizza} from "../common/component/loader/loaderPizza";
import {Pagination} from "../common/component/Pagination/Pagination";
import {useAppSelector} from "../app/store";
import {useAppDispatch} from "../common/hooks/useAppDispatch";
import {getPizza} from "./menu.slice";
import {allPizzaSelect} from "./selectors";
import {loaderSelect} from "../app/selectors";
import {activeFilterSelect, categorySelect, searchValueSelect} from "../search/selectors";
import {useDebounce} from "../common/hooks/useDebounce";


export const Menu = () => {
    const searchValue=useAppSelector(searchValueSelect)
    const dispatch=useAppDispatch()
    const allPizza=useAppSelector(allPizzaSelect)
    const loader  =useAppSelector(loaderSelect)
     const activeFilter =useAppSelector(activeFilterSelect)
    const category=useAppSelector(categorySelect)
    const searchValueDebounce =useDebounce(searchValue,500)
    const [isActive, setIsActive]=useState(1)
    const filter = activeFilter === 0 ? '' : `category=${activeFilter}`
    const sort = category.sortProperty === 'rating' ? '' : `&sortBy=${category.sortProperty}&order=desc`
    const skeleton=[...new Array(allPizza.length)].map((_, i) => <LoaderPizza key={i}/>)
    const pizza=allPizza.filter((el)=>{
        if (el.title && searchValueDebounce){
           return   el.title.toLowerCase().includes(searchValueDebounce.toLowerCase())
        }
    return allPizza
    }).map((el) => {
        return <Item key={el.id}
                     title={el.title}
                     category={el.category}
                     price={el.price}
                     sizes={el.sizes}
                     id={el.id}
                     imageUrl={el.imageUrl}
                     types={el.types}
                     rating={el.rating}
                     count={el.count}
        />
    })

    useEffect(() => {
        dispatch(getPizza({isActive,filter,sort}))
    }, [isActive, sort, filter])

    return (
        <>
            <SortFilter/>
            <div className={s.menuContainerWrapper}>
                <div className={s.menuContainer}>
                    {loader ? skeleton :pizza}
                </div>
            </div>
            <Pagination isActive={isActive} setIsActive={setIsActive}  countPage={3}/>
        </>


    );
};
