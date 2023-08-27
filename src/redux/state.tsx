import ProfileReducer from "./PropfileReducer";
import DialogsReducer from "./DialogsReducer";



export let store = {
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
    _callSubscriber(state: any) {
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
// window.store = store;