import React from "react";
import classes from "./Nav.module.css"
import {NavLink} from "react-router-dom";
import {Friends, FriendsReturn} from "../Friends/Friends";
import {friendsType, store} from "../../redux/state";
export const Navbar = (friends:Array <friendsType>) => {
    // @ts-ignore
    return   (
        <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to = "/profile" aria-activedescendant={classes.active}  >Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to = '/Dialogs' >Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to = '/News' >News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to = '/Music' >Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to = '/Settings'>Settings</NavLink>
        </div>
            <div>
                <div className={classes.friends}>
                    {/*<Friends/>*/}
                    <FriendsReturn friends={friends}/>
            </div>
            </div>
    </nav>

    )
}