import {postsType} from "./state";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
type SetUserProfileType = {
    type: 'SET_USER_PROFILE';
    profile: any; // Adjust the type based on your actual data structure
}
type initialStateType = {
    posts: Array<postsType>
    newPostText: string
    profile?: null|any
}
let initialState: initialStateType = {
    posts: [
        {id: 1, message: 'Hey!Are you OK?', likesCount: 11},
        {id: 2, message: "JOhn is come in!", likesCount: 14},
    ],
    newPostText: 'Itttt'
};
const ProfileReducer = (state: initialStateType = initialState, action: any) => {

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
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
    }

}
export const AddPostActionCreactor = () => ({type: ADD_POST})
export const setUserProfile = (profile: any): SetUserProfileType => ({type: SET_USER_PROFILE, profile})
export const UpdateNewPostTextActionCreactor = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})
export default ProfileReducer;