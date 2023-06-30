import React from 'react';
import s from "../style.module.scss";
import {Button} from "./button";

const OptionPizza = () => {
    return (
        <article className={s.pizzaSelection}>
            <div className={s.selectionText}>
                <Button name={'Тонкое'}/>
                <Button name={'Традиционное'}/>
            </div>
            <div className={s.selectionRadius}>
                <Button name={'26 см'}/>
                <Button name={'30 см'}/>
                <Button name={'40 см'}/>
            </div>
        </article>
    );
};

export default OptionPizza;