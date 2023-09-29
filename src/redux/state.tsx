import ProfileReducer from "./PropfileReducer";
import DialogsReducer from "./DialogsReducer";

export type postsType = {
    id: number
    message: string
    likesCount: number
}

type profilePageType = {
    posts: Array<postsType>
    newPostText: string
}

type messagesDataType = {
    id: number
    message: string
}

type dialogsDataType = {
    id: number
    name: string
}

export type friendsType = {
    id: number
    name: string
}

export type dialogsPageType = {
    messagesData: Array<messagesDataType>
    dialogsData: Array<dialogsDataType>
    newMessageBody: string
    friends: Array<friendsType>
}
export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}
export type storeType = {
    _state: stateType
    _callSubscriber: (state: stateType)=> void
    getState: ()=>stateType
    subscribe: (observer: any)=>void
    dispatch: (action:any)=>void
}

let store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hey!Are you OK?', likesCount: 11},
                {id: 2, message: "JOhn is come in!", likesCount: 14},
            ],
            newPostText: 'Itttt'
        },
        dialogsPage: {
            messagesData: [
                {id: 1, message: 'Hey!'},
                {id: 2, message: 'How is the weather like today!'},
                {id: 3, message: 'Whats up!'},
                {id: 4, message: 'Here are you!'}
            ],
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
    },
    _callSubscriber(_state: stateType) {
        console.log('hhh');
    },
    getState() {
        return this._state;
    },


    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    dispatch(action: any) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action);
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;