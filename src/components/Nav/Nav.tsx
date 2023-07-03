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
            <a>News</a>
        </div>
        <div className={classes.item}>
            <a>Music</a>
        </div>
        <div className={classes.item}>
            <a>Settings</a>
        </div>
    </nav>
}