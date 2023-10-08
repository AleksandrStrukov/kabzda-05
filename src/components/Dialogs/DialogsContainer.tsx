import {sendMessageCreator, UpdateNewMessageBodyCreactor} from "../../redux/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {stateType} from "../../redux/state";

import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


let mapStateToProps = (state: stateType)=>{
    return {
        dialogsPage: state.dialogsPage,

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
let AuthRedirectComponent = withAuthRedirect(Dialogs);



export const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)