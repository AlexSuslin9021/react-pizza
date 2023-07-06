import React, {useState} from 'react';
import s from './pagination.module.scss'
export const Pagination:React.FC<PaginationType> = ({countPage}) => {
    let count=[]
    for(let i=1;i <= countPage; i++){
        count.push(i)
    }
    const [isActive, setIsActice]=useState(0)
   const onClick=(i:number)=>{
       setIsActice(i)

   }
    return (
        <div className={s.paginator}>
            <span className={s.arrow}>{'<'}</span>
            {count.map((el,index)=><span onClick={()=>onClick(index)} className={isActive===index ? s.active : s.page} key={index}>{el}</span>)}
            <span className={s.arrow}>{'>'}</span>
        </div>
    );
};

type PaginationType={
    countPage:number
}
