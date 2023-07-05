import React, {useEffect, useState} from 'react';
import {Item} from "./common/items";
import s from './style.module.scss'
import {Search} from "../common/component/search/search";

import {PizzaType} from "./api.menu";
import {LoaderPizza} from "../common/component/loader/loaderPizza";


export const Menu = () => {
    const[loader, setLoader]=useState(false)
    // const allPizza = useAppSelector(state => state.menuReducer)
    const [allPizza, setAllPizza]=useState<PizzaType[]>([])
 // const dispatch = useAppDispatch()
    useEffect(()=>{
        setLoader(true)
        fetch('https://64a3b031c3b509573b56686b.mockapi.io/Items')
            .then((res)=>{return  res.json()})
            .then((arr:any)=>{
            setAllPizza(arr)
            setTimeout(()=>{
                setLoader(false)
            },2000)
        })

    },[])
    return (
        <>
            <Search/>
            <div className={s.menuContainerWrapper}>
            <div className={s.menuContainer}>
                {loader ?  [...new Array(8)].map((_,i)=><LoaderPizza key={i} />):
                     allPizza.map((el) => {
                    return  <Item key={el.id}
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
            </div>
        </>


    );
};

