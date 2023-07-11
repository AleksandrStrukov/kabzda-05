import React from "react";
import classes from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogsItem";
import {MessageItem} from "./MessageItem/MessageItem";





export const Dialogs = (props: any) => {

    let dialogsData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Sara'},
        {id: 3, name: 'Tania'},
        {id: 4, name: 'Alexey'},
        {id: 5, name: 'Grisha'},
        {id: 6, name: 'Maks'}
    ]
    let messagesData = [
        {id: 1, message: 'Hey!'},
        {id: 2, message: 'How is the weather like today!'},
        {id: 3, message: 'Whats up!'},
        {id: 4, message: 'Here are you!'}
    ]
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