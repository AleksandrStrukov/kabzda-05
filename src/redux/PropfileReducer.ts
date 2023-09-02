

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts:  [
        {id: 1, message: 'Hey!Are you OK?', likesCount: 11},
        {id: 2, message: "JOhn is come in!", likesCount: 14},
    ],
    newPostText: 'Itttt'
};
const ProfileReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };

            return {...state, posts: [...state.posts, newPost], newPostText: ''};

        case UPDATE_NEW_POST_TEXT:

            return {...state, newPostText: action.newText};
        default:
            return state;
    }

}
export const AddPostActionCreactor = () => ({type: ADD_POST})
export const UpdateNewPostTextActionCreactor = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})
export default ProfileReducer;