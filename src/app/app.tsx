import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Menu} from '../menu/menu';
import {Cart} from '../cart/cart';
import {EmptyCart} from "../cart/component/EmptyCart/emptyCart";
import {NotFound} from "../common/component/notFound/notFound";
import {OnePizza} from "../onePizza/onePizza";
import {Layout} from "../common/layout/layout";


function App() {
    return (

        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="" element={<Menu/>}/>
                <Route path="cart" element={<Cart/>}/>
                <Route path="pizza/:id" element={<OnePizza/>}/>
                <Route path="cart-empty" element={<EmptyCart/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Route>
        </Routes>

    );
}


export default App;
