import React from 'react';
import s from './logo.module.scss'
import {useNavigate} from "react-router-dom";


const Logo:React.FC<LogoType> = ({src,header,description, width,height}) => {

    const navigate= useNavigate()
    const onClickLogo=()=>{
       navigate('/')
   }
    return (
        <div className={s.logo} onClick={onClickLogo}>
            <div><img style={{width, height}}   src={src} alt="#"/></div>
            <div>
                <h4>{header}</h4>
                <p>{description}</p>
            </div>
        </div>

    );
};

type LogoType={
    src:string,
    header:string,
    description:string
    width:string,
    height:string

}
export default Logo;