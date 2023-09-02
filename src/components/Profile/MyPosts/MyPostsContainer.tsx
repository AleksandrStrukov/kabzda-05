
import {AddPostActionCreactor, UpdateNewPostTextActionCreactor} from "../../../redux/PropfileReducer";
import {MyPosts} from "./MyPosts";

import {connect} from "react-redux";

// type myPostsPropsType = {
//     message: string;
//     likesCount: number
//
// }

const mapStateToProps = (state: any)=>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch:any)=>{
    return {
        updateNewPostText: (text: string) => {
            let action = UpdateNewPostTextActionCreactor(text);
        dispatch(action);
        },
        addPost: () => {
            dispatch(AddPostActionCreactor());
        }
    }
}

export const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)