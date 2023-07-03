import React, {useState} from 'react';
import s from "../style.module.scss";


const OptionPizza: React.FC<OptionPizzaType> = ({sizes, types}) => {
    const typesPizza = ['Тонкое', 'Традиционное']
    const [activeType, setActivetype] = useState(0)
    const [activeSize, setActiveSize] = useState(0)
    const onClickTypes = (index: number) => {setActivetype(index)}
    const onClickSize = (index: number) => {setActiveSize(index)}
    return (
        <article className={s.pizzaSelection}>
            <div className={s.selectionText}>
                {types.map((el, i) => <button
                    key={el}
                    onClick={() => onClickTypes(el)}
                    className={activeType === i ? s.active : ''}
                >{typesPizza[el]}</button>)}
            </div>
            <div className={s.selectionRadius}>
                  {sizes.map((el, i) => <button
                        key={i}
                        onClick={() => onClickSize(i)}
                        className={activeSize === i ? s.active : ''}
                    >{`${el} см`}</button>)}
            </div>
        </article>
    );
};

export default OptionPizza;

type OptionPizzaType = {
    sizes: number[]
    types: number[]
}