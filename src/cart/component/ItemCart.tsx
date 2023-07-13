import React from 'react';
import Logo from "../../common/component/logo/Logo";

import s from '../style.module.scss'
import {useAppSelector} from "../../app/store";
import {addOnePizza, deleteOnePizza, removeItem} from "../cart.slice";
import {useAppDispatch} from "../../common/hooks/useAppDispatch";
import {itemsSelect} from "../selectors";

export const ItemCart = () => {
   const dispatch=useAppDispatch()
    const {items}=useAppSelector(itemsSelect)
   const onClickDelete= (id:number)=>{ dispatch(removeItem(id)) }
   const onClickPlus=(id:number)=>{ dispatch(addOnePizza(id)) }
    const onClickMinus=(id:number)=>{ dispatch(deleteOnePizza(id)) }
    return (<>
        {items.map((i)=>{
          return  <div className={s.itemCart}>
                <Logo height={'80px'} width={'80px'} src={i.imageUrl} header={i.title} description={'тонкое тесто'}/>
                <div className={s.count}>
                    <button disabled={i.count<=0} onClick={()=>onClickMinus(i.id)} >-</button>
                    <span>{i.count}</span>
                    <button  onClick={()=>onClickPlus(i.id)}>+</button>
                </div>
                <div className={s.delete}>
                    <span>{i.price}</span>
                    <button onClick={()=>onClickDelete(i.id)}>x</button>
                </div>
            </div>
            })

        }    </>

    );
};

