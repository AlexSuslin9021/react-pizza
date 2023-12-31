import React, {useState} from 'react';
import s from '../style.module.scss'

import {PriceAndAdd} from "./priceAndAdd";
import OptionPizza from "./optionPizza";
import {addItemInCart} from "../../cart/cart.slice";
import {useAppDispatch} from "../../common/hooks/useAppDispatch";
import {getOnePizza} from "../../onePizza/pizza.slice";
import {useNavigate} from "react-router-dom";

export const Item: React.FC<ItemProps> = ({id, imageUrl, price, title, types, sizes, category, rating, count}) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [countPizza, setCountPizza] = useState<number>(0)
    const onClickHandler = () => {
        const item = {
            id,
            imageUrl,
            price,
            title,
            types,
            sizes,
            category,
            rating,
            count
        }
        setCountPizza(countPizza + 1)
        dispatch(addItemInCart(item))

    }
    const onClickItem = () => {
        dispatch(getOnePizza(id))
        navigate(`/pizza/${id}`)

    }
    return (

        <div className={s.item} >
            <div onClick={onClickItem}><img style={{width: '250px', height: '250px'}} src={imageUrl} alt="#"/></div>
            <div>{title}</div>
            <OptionPizza sizes={sizes} types={types}/>
            <PriceAndAdd callback={onClickHandler} countPizza={countPizza} price={price} name={'+ Добавить'}/>
        </div>

    );
};

export type ItemProps = {
    "id": number,
    "imageUrl": string,
    "title": string,
    "types": number[],
    "sizes": number[],
    "price": number,
    "category": number,
    "rating": number,
    count: number

}