import React from "react";
import classes from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogsItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {dialogsData, messagesData} from "../../index";





export const Dialogs = (props: any) => {

    let dialogElement = dialogsData
        .map(n => <DialogItem name={n.name} id={n.id}/>);


    let messageElement = messagesData
        .map(m => <MessageItem message={m.message}/>)


    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                <ul>
                    {dialogElement}
                </ul>
            </div>
            <div className={classes.messages}>
                {messageElement}
            </div>
        </div>
    )
}