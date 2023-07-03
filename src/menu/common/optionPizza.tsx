import React from 'react';
import s from "../style.module.scss";
import {Button} from "./button";

const OptionPizza:React.FC<OptionPizzaType> = ({sizes}) => {
    return (
        <article className={s.pizzaSelection}>
            <div className={s.selectionText}>
                <Button name={'Тонкое'}/>
                <Button name={'Традиционное'}/>
            </div>
            <div className={s.selectionRadius}>
                {sizes.map(el=>  <Button name={`${el} см`}/>)}
            </div>
        </article>
    );
};

export default OptionPizza;

type OptionPizzaType={
    sizes:number[]
}