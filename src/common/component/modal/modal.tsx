import React from 'react';
import s from'./modal.module.scss'
export const Modal: React.FC<ModalType> = ({callback, category}) => {

    return (
        <div className={s.modalContainer}>
            <div className={s.modal}>
                <span className={category==='популярности' ? s.active :''}  onClick={()=>callback('популярности')}>по популярности</span>
                <span className={category==='цене' ? s.active :''} onClick={()=>callback('цене')} >по цене</span>
                <span className={category==='алфавиту' ? s.active :''} onClick={()=>callback('алфавиту')} >по алфавиту</span>
            </div>
        </div>
    );
};

type ModalType={
    callback:(value:string)=>void
    category:string
}