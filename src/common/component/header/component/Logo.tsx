import React from 'react';
import s from "../header.module.scss";


const Logo:React.FC<LogoType> = ({src,header,description, width,height}) => {
    return (
        <div className={s.logo}>
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