import './App.css';
import React from "react";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Navbar} from "./components/Nav/Nav";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {News} from './components/News/News';
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import store from "./redux/reduxStore";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props: any) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar friends={store.getState().DialogsPage.friends}/>

            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs' element={<DialogsContainer />} />
                    <Route path='/profile/:UserID?' element={<ProfileContainer />} />
                    <Route path='/users' element={<UsersContainer />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/music' element={<Music />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/users' element={<UsersContainer />} />
                </Routes>
            </div>



        </div>
    )
}

export default App;
