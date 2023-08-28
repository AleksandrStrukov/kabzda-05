import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/reduxStore";
import {BrowserRouter} from "react-router-dom";
import {StoreContext} from "./storeContext";




let rerenderEntireTree = (state:any) => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <BrowserRouter>
            <StoreContext.Provider value ={store}>
                <App />
            </StoreContext.Provider>
            {/*state={state} dispatch={store.dispatch.bind(store)} store={store}*/}
        </BrowserRouter>
    );
}
rerenderEntireTree(store.getState());
store.subscribe(()=> {
    let state = store.getState();
    rerenderEntireTree(state)});

