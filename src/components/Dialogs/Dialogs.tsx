import React from "react";
import classes from "./Dialogs.module.css"
export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                Alex
                </div>
                <div className={classes.dialog}>
                    Sara
                </div>
                <div className={classes.dialog}>
                    Tania
                </div>
                <div className={classes.dialog}>
                    Alexey
                </div>
                <div className={classes.dialog}>
                    Alex
                </div>
                <div className={classes.dialog}>
                    Alex
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