import React, {createRef, useRef} from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./post/Post";
import {state} from "../../../redux/state";

type myPostsPropsType = {
    message: string;
    like: number

}

export const MyPosts = (props: any) => {
    let newPostElement = useRef<HTMLTextAreaElement>(null);
    ;

    let postElement = props.posts
        .map((p: any) => <Post message={p.message} like={p.like}/>)



    let addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            alert(text);
        }};

        return <div>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <div>

                    <textarea ref={newPostElement}/>

                </div>
                <button onClick={addPost}>Add post</button>
            </div>

            <div className={classes.posts}>
                {postElement}

            </div>
        </div>;
    };