import React from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


const DialogItem = (props: any) => {
    let path = '/dialogs/'+ props.id
    return  <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const MessageItem = (props:any) => {
    return <div className={classes.message}>{props.message}</div>
}

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                <DialogItem name= 'Alex' id='1'/>
                <DialogItem name= 'Sara' id='2'/>
                <DialogItem name= 'Tania' id='3'/>
                <DialogItem name= 'Alexey' id='4'/>
                <DialogItem name= 'Grisha' id='5'/>
                <DialogItem name= 'Maks' id='6'/>

            </div>
            <div className={classes.messages}>
                <MessageItem message='Hey!'/>
                <MessageItem message='How is the weather like today!'/>
                <MessageItem message='Whats up!'/>
                <MessageItem message='Here are you!'/>
            </div>
        </div>
    )
}