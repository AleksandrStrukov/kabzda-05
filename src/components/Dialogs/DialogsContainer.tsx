import {sendMessageCreator, UpdateNewMessageBodyCreactor} from "../../redux/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state: any)=>{
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch:any)=>{
    return {
        updateNewMessageBody: (body: any)=> {
            dispatch(UpdateNewMessageBodyCreactor(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator)
        }
    }
}

export const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs)