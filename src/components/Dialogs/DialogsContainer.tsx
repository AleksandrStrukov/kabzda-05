import {sendMessageCreator, UpdateNewMessageBodyCreactor} from "../../redux/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {stateType} from "../../redux/state";


let mapStateToProps = (state: stateType)=>{
    return {
        dialogsPage: state.dialogsPage
        isAuth:state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch:any)=>{
    return {

        updateNewMessageBody: (body: string)=> {
            dispatch(UpdateNewMessageBodyCreactor(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator)
        }
    }
}

export const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs)