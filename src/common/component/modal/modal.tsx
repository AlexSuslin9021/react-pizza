import React from 'react';
import s from'./modal.module.scss'
export const Modal: React.FC<ModalType> = ({callback}) => {

    return (
        <div className={s.modalContainer}>
            <div className={s.modal}>
                <span onClick={()=>callback('популярности')}>по популярности</span>
                <span onClick={()=>callback('цене')} >по цене</span>
                <span onClick={()=>callback('алфавиту')} >по алфавиту</span>
            </div>
        </div>
    );
};

type ModalType={
    callback:(value:string)=>void
}