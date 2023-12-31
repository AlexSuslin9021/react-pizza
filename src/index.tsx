import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/app';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./app/store";
import{persistStore}from 'redux-persist'
import {PersistGate} from "redux-persist/integration/react";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
let persitor=persistStore(store)
root.render(
<BrowserRouter>
    <Provider store={store}>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <PersistGate persistor={persitor}>
            <App />
        </PersistGate>

    </Provider>
</BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
