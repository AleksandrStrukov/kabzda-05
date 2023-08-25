const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

export let store = {
    _state: {
        posts: [
            {id: 1, message: 'Hey!Are you OK?', likesCount: 11},
            {id: 2, message: "JOhn is come in!", likesCount: 14},
        ],
        newPostText: 'Itttt',
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
        if (action === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.newPostText,
                likesCount: 0

            };
            this._state.posts.push(newPost);
            this._state.newPostText = '';
            this._callSubscriber(this.getState());
        } else if (action === UPDATE_NEW_POST_TEXT) {
            this._state.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }else if (action.type === SEND_MESSAGE) {
            let body = this._state.newMessageBody;
            this._state.newMessageBody='';
            this._state.messagesData.push( {id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }
}

export const AddPostActionCreactor = () => ({type: ADD_POST})
export const UpdateNewPostTextActionCreactor = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const UpdateNewMessageBodyCreactor = (body: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})
export default store;
// window.store = store;