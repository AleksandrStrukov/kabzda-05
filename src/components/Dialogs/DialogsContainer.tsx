import React, {ChangeEvent, useRef} from "react";
import {DialogItem} from "./DialogItem/DialogsItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {sendMessageCreator, UpdateNewMessageBodyCreactor} from "../../redux/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../storeContext";


export const DialogsContainer = (props: any) => {


    return <StoreContext.Consumer>
        {(store) => {
            let stateDial = store.getState().DialogsPage.dialogsData;
            let stateMess = store.getState().DialogsPage.messagesData;

            let dialogElement = stateDial
                .map((n: { name: string; id: number }) => <DialogItem name={n.name} id={n.id}/>);


            let messageElement = stateMess
                .map((m: { message: string }) => <MessageItem message={m.message}/>);
            let newMessageBody: string = props.store._state.dialogsPage.newMessageBody;
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }
            let onMessageChange = (body: any) => {

                store.dispatch(UpdateNewMessageBodyCreactor(body));
            }
            return <Dialogs updateNewMessageBody={onMessageChange} sendMessage={onSendMessageClick}
                            dialogsPage={props.store.getState().dialogsPage}/>
        }}
    </StoreContext.Consumer>

}