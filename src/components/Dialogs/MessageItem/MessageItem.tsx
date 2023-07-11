import React from "react";
import classes from "./../Dialogs.module.css"




export const MessageItem = (props: any) => {
    return <div className={classes.message}>{props.message}</div>
}
