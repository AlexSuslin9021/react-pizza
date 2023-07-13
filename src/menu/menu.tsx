import React, {useEffect, useState} from 'react';
import {Item} from "./common/items";
import s from './style.module.scss'
import {SortFilter} from "../search/SortFilter";
import {PizzaType} from "./api.menu";
import {LoaderPizza} from "../common/component/loader/loaderPizza";
import {Pagination} from "../common/component/Pagination/Pagination";
import {useAppSelector} from "../app/store";
import {useAppDispatch} from "../common/hooks/useAppDispatch";
import {setActiveFilter, setCategory} from "../search/sort.slice";
import { setLoader} from "../app/app.slice";
import axios from "axios";
import {getPizza} from "./menu.slice";


export const Menu:React.FC<MenuType> = ({searchValue}) => {
    const allPizza=useAppSelector(state => state.menuReducer)
    const dispatch=useAppDispatch()
    const [isActive, setIsActive]=useState(1)
    const loader  =useAppSelector(state => state.appReducers.loader)
    const activeFilter =useAppSelector(state => state.sort.activeFilter)
    const category=useAppSelector(state => state.sort.category)
    const filter = activeFilter === 0 ? '' : `category=${activeFilter}`
    const sort = category.sortProperty === 'rating' ? '' : `&sortBy=${category.sortProperty}&order=desc`
    const onClickFilter = (id: number) => { dispatch(setActiveFilter(id)) }
    const onClickSort = (value: any) => { dispatch( setCategory(value)) }
    const skeleton=[...new Array(allPizza.length)].map((_, i) => <LoaderPizza key={i}/>)
    const pizza=allPizza.filter((el)=>{
        if (el.title && searchValue){
           return   el.title.toLowerCase().includes(searchValue.toLowerCase())
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
            <SortFilter activeFilter={activeFilter} setActiveFilter={onClickFilter}
                    category={category} setCategory={onClickSort}
            />
            <div className={s.menuContainerWrapper}>
                <div className={s.menuContainer}>
                    {loader ? skeleton :pizza}
                </div>
            </div>
            <Pagination isActive={isActive} setIsActive={setIsActive}  countPage={3}/>
        </>


    );
};

type MenuType={
    searchValue:string
}