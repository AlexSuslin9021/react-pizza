import React, {useState} from 'react';
import Logo from "../../common/component/logo/Logo";

import s from '../style.module.scss'
import {useAppSelector} from "../../app/store";
import {removeItem} from "../cart.slice";
import {useAppDispatch} from "../../common/hooks/useAppDispatch";

export const ItemCart = () => {
   const dispatch=useAppDispatch()
    const {items}=useAppSelector(state => state.cart)

   const onClickDelete= (id:number)=>{
       dispatch(removeItem(id))
       alert(id)
   }
    return (<>
        {items.map((i)=>{
          return  <div className={s.itemCart}>
                <Logo height={'80px'} width={'80px'} src={i.imageUrl} header={i.title} description={'тонкое тесто'}/>
                <div className={s.count}>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
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

