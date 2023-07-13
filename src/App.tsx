import logo from './logo.svg';
import './App.css';
import React from "react";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {News} from './components/News/News';
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Friends} from "./components/Friends/Friends";


const App = (props:any) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>

            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs'
                           element={<Dialogs dialogsData={props.state.dialogsData}
                                             messagesData={props.state.messagesData}/>}/>
                    <Route path='/profile' element={<Profile posts={props.state.posts}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>

                </Routes>


            </div>
        </div>
    )
}

export default App;
