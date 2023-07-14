import React from 'react';

export const Count: React.FC<CountType> = ({text, count, color}) => {
    return (
        <div>
         <span> {text}  <span style={{color:color, fontWeight:'bold'}}>{count}</span></span>
        </div>
    );
};

type CountType={
    text:string
    count:number | string
    color:string
}