import React from "react";
import classes from "./Nav.module.css"
import {NavLink} from "react-router-dom";
export const Navbar = () => {
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
    </nav>
    )
}