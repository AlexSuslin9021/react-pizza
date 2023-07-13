import React  from 'react';
import s from './pagination.module.scss'
import {useAppSelector} from "../../../app/store";
import {isActiveSelect} from "../../../search/selectors";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {setIsActive} from "../../../search/sort.slice";
export const Pagination = () => {
  const dispatch =useAppDispatch()
    const isActive=useAppSelector(isActiveSelect)
    let count=[]
    for(let i=1;i <= 3; i++){
        count.push(i)
    }
   const onClickPage=(i:number)=>{dispatch(setIsActive(i)) }
   const onClickNext=()=>{
       const newActive = isActive > 1 ? isActive + 1 : 3;
       dispatch(setIsActive(newActive));

        }
    const onClickBack=()=>{
        const newActive = isActive > 1 ? isActive - 1 : 1;
        dispatch(setIsActive(newActive));
        }


    return (
        <div className={s.paginator}>
            <span onClick={onClickBack}  className={s.arrow}>{'<'}</span>
            {count.map((el,index)=><span onClick={()=>onClickPage(index+1)} className={isActive===index+1 ? s.active : s.page} key={index}>{el}</span>)}
            <span onClick={onClickNext} className={s.arrow}>{'>'}</span>
        </div>
    );
};

