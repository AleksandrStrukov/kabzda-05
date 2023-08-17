import React, {ChangeEvent, createRef, useRef} from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./post/Post";
import {AddPostActionCreactor, store, UpdateNewPostTextActionCreactor} from "../../../redux/state";

type myPostsPropsType = {
    message: string;
    likesCount: number

}
export const MyPosts = (props: any) => {
    let newPostElement = useRef<HTMLTextAreaElement>(null);


    let postElement = props.posts
        .map((p: myPostsPropsType) => <Post message={p.message} like={p.likesCount}/>)


    let addPost = () => {
        props.dispatch(AddPostActionCreactor());
    };

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text: any = newPostElement.current?.value;
        let action = UpdateNewPostTextActionCreactor(text);
        props.dispatch(action);
    }

    return <div>
        <div>
            <h3>My posts</h3>
        </div>
        <div>
            <div>

                <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}/>

            </div>
            <button onClick={addPost}>Add post</button>
        </div>

        <div className={classes.posts}>
            {postElement}

        </div>
    </div>;
};