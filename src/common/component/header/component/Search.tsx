import React, {ChangeEvent, useRef} from 'react';
import s from '../header.module.scss'
import search from '../../../image/search.svg'
import close from '../../../image/logo/close.svg'
import {useAppSelector} from "../../../../app/store";
import {searchValueSelect} from "../../../../search/selectors";
import {setSearchValue} from "../../../../search/sort.slice";
import {useAppDispatch} from "../../../hooks/useAppDispatch";

export const Search = () => {
    const inputRef =  useRef<HTMLInputElement>(null)
  const dispatch= useAppDispatch()
   const onChangeInput=(e:ChangeEvent<HTMLInputElement>)=>{
       dispatch(setSearchValue(e.currentTarget.value))
   }
    const searchValue =useAppSelector(searchValueSelect)

   const onClickClose=()=>{
       dispatch(setSearchValue(''))
        inputRef.current?.focus()
   }
    return (
        <div className={s.search}>
            <img className={s.logo} src={search} alt=""/>
            <input ref={inputRef} onChange={onChangeInput} value={searchValue} placeholder={'Поиск пиццы'}  type="text"/>
            {searchValue &&  <img onClick={onClickClose} className={s.close} src={close} alt=""/>}
        </div>
    );
};
