import React  from 'react';
import s from './pagination.module.scss'
export const Pagination:React.FC<PaginationType> = ({countPage,setIsActive,isActive}) => {
    let count=[]
    for(let i=1;i <= countPage; i++){
        count.push(i)
    }
   const onClickPage=(i:number)=>{ setIsActive(i) }
   const onClickNext=()=>{
       if(isActive<=3){
           setIsActive(isActive+1)
       } else{  setIsActive(3)}

        }
    const onClickBack=()=>{
        if(isActive>1){
            setIsActive(isActive-1)
        }else{
            setIsActive(1)
        }

    }
    return (
        <div className={s.paginator}>
            <span onClick={onClickBack}  className={s.arrow}>{'<'}</span>
            {count.map((el,index)=><span onClick={()=>onClickPage(index+1)} className={isActive===index+1 ? s.active : s.page} key={index}>{el}</span>)}
            <span onClick={onClickNext} className={s.arrow}>{'>'}</span>
        </div>
    );
};

type PaginationType={
    countPage:number
    isActive:number
    setIsActive:(value:number)=>void
}
