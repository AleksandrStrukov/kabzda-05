import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, state, subscribe, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";




let rerernderEntireTree = (state:any) => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>
    );
}
rerernderEntireTree(state);
subscribe(rerernderEntireTree)

