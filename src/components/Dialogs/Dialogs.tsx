import React, {ChangeEvent, useRef} from "react";
import classes from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogsItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {sendMessageCreator, UpdateNewMessageBodyCreactor} from "../../redux/DialogsReducer";


export const Dialogs = (props: any) => {

    let stateDial = props.store.getState().dialogsPage.dialogsData;
    let stateMess = props.store.getState().dialogsPage.messagesData;
    let newMessageElement = useRef<HTMLTextAreaElement>(null);

    // let addMessage = () => {
    //     if (newMessageElement.current) {
    //         let text = newMessageElement.current.value;
    //         alert(text);
    //     }
    // };
    let dialogElement = stateDial
        .map((n: { name: string; id: number}) => <DialogItem name={n.name} id={n.id}/>);


    let messageElement = stateMess
        .map((m: { message: string}) => <MessageItem message={m.message}/>);
    let newMessageBody:string = props.store._state.dialogsPage.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>)=> {
        let body = e.target.value;
        props.store.dispatch(UpdateNewMessageBodyCreactor(body));
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