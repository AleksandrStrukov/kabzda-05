import React, {ChangeEvent, createRef, useRef} from "react";
import {AddPostActionCreactor, UpdateNewPostTextActionCreactor} from "../../../redux/PropfileReducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../storeContext";

type myPostsPropsType = {
    message: string;
    likesCount: number

}
export const MyPostsContainer = (props: any) => {


    return (
        <StoreContext.Consumer>
            {
            (store)=> {
                let state = props.store.getState();

                let addPost = () => {

            store.dispatch(AddPostActionCreactor());
        };

            let onPostChange = (text: string) => {

            let action = UpdateNewPostTextActionCreactor(text);
            store.dispatch(action);
        }
            return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                     posts={props.store.getState().profilePage.posts}
                     newPostText={props.store.getState().profilePage.newPostText}/>}}
        </StoreContext.Consumer>)

};