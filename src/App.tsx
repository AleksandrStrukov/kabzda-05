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

;


const App = (props: any) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar name={store.getState().DialogsPage.friends}/>

            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs'
                           element={<DialogsContainer
                               // store={props.store}
                               // dialogsData={props.state.dialogsData}
                               // messagesData={props.state.messagesData}
                           />}/>
                    <Route path='/profile' element={<Profile />}/>
                    {/*store={props.store}*/}
                    <Route path='/news' element={<News/>}/>
                    {/*<Route path='/friends' element={<Friends friends={store._state.dialogsPage.friends}/>}/>*/}
                    {/*<Route path='/friends' element={<FriendsReturn name={store._state.friends}/>}/>*/}

                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>

                </Routes>


            </div>
        </div>
    )
}

export default App;
