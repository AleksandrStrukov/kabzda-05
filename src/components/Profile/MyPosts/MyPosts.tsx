import React, {ChangeEvent, createRef, useRef} from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./post/Post";
import {store} from "../../../redux/state";

type myPostsPropsType = {
    message: string;
    likesCount: number

}

export const MyPosts = (props: any) => {
    let newPostElement = useRef<HTMLTextAreaElement>(null);


    let postElement = props.posts
        .map((p: myPostsPropsType) => <Post message={p.message} like={p.likesCount}/>)


    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    };

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text: any = newPostElement.current?.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
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