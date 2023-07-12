import React from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./post/Post";
import {postsData} from "../../../index";

export const MyPosts = () => {


let postElement = postsData
    .map(p =>  <Post message={p.message} like={p.likesCount}/>)



    return <div>
        <div>
           <h3>My posts</h3>
        </div>
        <div>
            <div>
                <textarea></textarea>

            </div>
            <button>Add post</button>
        </div>

        <div className={classes.posts}>
            {postElement}

        </div>
    </div>;
}