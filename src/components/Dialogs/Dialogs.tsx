import React, {ChangeEvent, useRef} from "react";
import classes from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogsItem";
import {MessageItem} from "./MessageItem/MessageItem";



export const Dialogs = (props: any) => {
let state= props.dialogsPage;
    let stateDial = props.store.getState().dialogsPage.dialogsData;
    let stateMess = props.store.getState().dialogsPage.messagesData;
    let newMessageElement = useRef<HTMLTextAreaElement>(null);

        let dialogElement = stateDial
        .map((n: { name: string; id: number}) => <DialogItem name={n.name} id={n.id}/>);


    let messageElement = stateMess
        .map((m: { message: string}) => <MessageItem message={m.message}/>);
    let newMessageBody:string = props.store._state.dialogsPage.newMessageBody;
    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>)=> {
        let body = e.target.value;
        props.updateNewMessageBody(body)

    }

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                <ul>
                    {dialogElement}
                </ul>
            </div>
            <div className={classes.messages}>
                <div>{messageElement}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onMessageChange}
                                   placeholder={'Enter message'}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
            </div>
    )
}