import React, {useRef} from "react";
import classes from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogsItem";
import {MessageItem} from "./MessageItem/MessageItem";






export const Dialogs = (props: any) => {
    let newMessageElement = useRef<HTMLTextAreaElement>(null);
    ;
    let addMessage = () => {
        if (newMessageElement.current) {
            let text = newMessageElement.current.value;
            alert(text);
        }};
    let dialogElement = props.dialogsData
        .map((n: { name: string; id: number; }) => <DialogItem name={n.name} id={n.id}/>);


    let messageElement = props.messagesData
        .map((m: { message: string; }) => <MessageItem message={m.message}/>)


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
            <div>
                <div>

                    <textarea ref={newMessageElement}/>

                </div>
                <button onClick={addMessage}>Add post</button>
            </div>
        </div>
    )
}