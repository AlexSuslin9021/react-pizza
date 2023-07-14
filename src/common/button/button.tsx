import React from 'react';
import s from './button.module.css'
export const Button:React.FC<ButtonType> = ({name, color}) => {
    return (
        <button className={ color==='white'? s.buttonWhite : s.buttonOrange} >
            {name}
            </button>
    );
};

type ButtonType={
    name:string
    color:'white' | 'orange'
}