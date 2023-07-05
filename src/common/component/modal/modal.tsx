import React from 'react';
import s from'./modal.module.scss'
export const Modal: React.FC<ModalType> = ({callback, category}) => {
    const list=[
        {name:'по популярности', sortProperty:'price'},
        {name:'по цене', sortProperty:'price'},
        {name:'по алфавиту', sortProperty:'price'},
    ]
    return (
        <div className={s.modalContainer}>
            <div className={s.modal}>
                {list.map((el)=> <span className={category.name===el.name ? s.active :''} onClick={()=>callback(el)} >{el.name}</span>)}


            </div>
        </div>
    );
};

type ModalType={
    callback:(value:any)=>void
    category:any
}