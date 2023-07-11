import React, {ChangeEvent, useRef} from 'react';
import s from '../header.module.scss'
import search from '../../../image/search.svg'
import close from '../../../image/logo/close.svg'

export const Search:React.FC<SearchType> = ({searchValue,setSearchValue}) => {
    const inputRef =  useRef<HTMLInputElement>(null)
   const onChangeInput=(e:ChangeEvent<HTMLInputElement>)=>{
       setSearchValue(e.currentTarget.value)
   }


   const onClickClose=()=>{
       setSearchValue('')
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
type SearchType={
    searchValue:string
    setSearchValue:(value:string)=>void
}