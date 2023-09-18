import './App.css';
import React from "react";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";

import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {News} from './components/News/News';
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import store from "./redux/reduxStore";
import UsersContainer from "./components/users/UsersContainer";


;


const App = (props: any) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar friends={store.getState().DialogsPage.friends}/>

            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs'
                           element={<DialogsContainer

                           />}/>
                    <Route path='/profile' element={<Profile />}/>

                    <Route path='/news' element={<News/>}/>


                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/users' element={<UsersContainer/>}/>

                </Routes>


            </div>
        </div>
    )
}

export default App;
