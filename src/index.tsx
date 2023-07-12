import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
export let dialogsData = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Sara'},
    {id: 3, name: 'Tania'},
    {id: 4, name: 'Alexey'},
    {id: 5, name: 'Grisha'},
    {id: 6, name: 'Maks'}
]
export let messagesData = [
    {id: 1, message: 'Hey!'},
    {id: 2, message: 'How is the weather like today!'},
    {id: 3, message: 'Whats up!'},
    {id: 4, message: 'Here are you!'}
]
export  let postsData = [
    {id: 1, message: 'Hey!Are you OK?', likesCount:11},
    {id: 2, message: "JOhn is come in!", likesCount:14},
]
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
