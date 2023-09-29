import ProfileReducer from "./PropfileReducer";
import {dialogsPageType, storeType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
type initialStateType = {
    dialogsPage: dialogsPageType
}

let initialState: dialogsPageType = {
            messagesData: [
            {id: 1, message: 'Hey!'},
            {id: 2, message: 'How is the weather like today!'},
            {id: 3, message: 'Whats up!'},
            {id: 4, message: 'Here are you!'}
        ]
        ,
        dialogsData: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Sara'},
            {id: 3, name: 'Tania'},
            {id: 4, name: 'Alexey'},
            {id: 5, name: 'Grisha'},
            {id: 6, name: 'Maks'}
        ],
        newMessageBody: '',

        friends: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Sara'},
            {id: 3, name: 'Tania'}
        ]
    }
const DialogsReducer = (state: dialogsPageType = initialState, action: any) => {



    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:


            return {...state, newMessageBody: action.body};
        case SEND_MESSAGE:
            let body = state.newMessageBody;

            return {...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id: 6, message: body}]};
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const UpdateNewMessageBodyCreactor = (body: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})
export default DialogsReducer