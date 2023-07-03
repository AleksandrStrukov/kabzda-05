import React from "react";
import classes from "./Nav.module.css"
export const Navbar = () => {
    return   <nav className={classes.nav}>
        <div className={classes.item}>
            <a href = '/profile'>Profile</a>
        </div>
        <div className={classes.item}>
            <a href = '/Dialogs'>Messages</a>
        </div>
        <div className={classes.item}>
            <a href = '/News'>News</a>
        </div>
        <div className={classes.item}>
            <a href = '/Music'>Music</a>
        </div>
        <div className={classes.item}>
            <a href = '/Settings'>Settings</a>
        </div>
    </nav>
}