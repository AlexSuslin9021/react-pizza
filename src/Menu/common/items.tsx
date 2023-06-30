import React from 'react';
import s from '../style.module.scss'
import pizza from '../../common/image/image 6.svg'

export const Item = () => {
    return (

            <div className={s.item}>
            <div><img src={pizza} alt=""/></div>
            <div>name</div>

            <article className={s.pizzaSelection}>
                <div className={s.selectionText}>
                    <button>Тонкое</button>
                    <button>Традиционное</button>
                </div>
                <div className={s.selectionRadius}>
                    <button>26 см</button>
                    <button>30 см</button>
                    <button>40 см</button>
                </div>
            </article>
            <div className={s.price}>
                <span> price</span>
                <button> + Добавить </button>
            </div>
            </div>

    );
};

