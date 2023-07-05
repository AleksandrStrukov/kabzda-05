import React from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to='/dialogs/1'>Alex</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2'> Sara</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>Tania</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/4'> Alexey</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/5'> Grisha</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/6'>Maks</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hey!</div>
                <div className={classes.message}>How is the weather like today</div>
                <div className={classes.message}>Whats up?</div>
                <div className={classes.message}>Here are you!</div>
            </div>
        </div>
    )
}