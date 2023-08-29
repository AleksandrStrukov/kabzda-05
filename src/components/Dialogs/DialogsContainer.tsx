import {sendMessageCreator, UpdateNewMessageBodyCreactor} from "../../redux/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";


// export const DialogsContainer = (props: any) => {
//
//
//     return <StoreContext.Consumer>
//         {(store) => {
//             let stateDial = store.getState().DialogsPage.dialogsData;
//             let stateMess = store.getState().DialogsPage.messagesData;
//
//             let dialogElement = stateDial
//                 .map((n: { name: string; id: number }) => <DialogItem name={n.name} id={n.id}/>);
//
//
//             let messageElement = stateMess
//                 .map((m: { message: string }) => <MessageItem message={m.message}/>);
//             let newMessageBody: string = props.store._state.dialogsPage.newMessageBody;
//             let onSendMessageClick = () => {
//                 store.dispatch(sendMessageCreator());
//             }
//             let onMessageChange = (body: any) => {
//
//                 store.dispatch(UpdateNewMessageBodyCreactor(body));
//             }
//             return <Dialogs updateNewMessageBody={onMessageChange} sendMessage={onSendMessageClick}
//                             dialogsPage={props.store.getState().dialogsPage}/>
//         }}
//     </StoreContext.Consumer>
//
// }
let mapStateToProps = (state: any)=>{
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch:any)=>{
    return {
        updateNewMessageBody: ()=> {
            dispatch(sendMessageCreator())
        },
        sendMessage: (body: any) => {
            dispatch(UpdateNewMessageBodyCreactor(body))
        }
    }
}

export const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs)