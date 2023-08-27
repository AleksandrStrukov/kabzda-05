import ProfileReducer from "./PropfileReducer";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
const DialogsReducer = (state:any, action:any) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 6, message: body});
            return state;
        default:
            return state;
    }}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const UpdateNewMessageBodyCreactor = (body: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})
export default DialogsReducer