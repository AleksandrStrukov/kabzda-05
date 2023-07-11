import React from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./post/Post";

export const MyPosts = () => {


    let postsData = [
        {id: 1, message: 'Hey!Are you OK?', likesCount:11},
        {id: 2, message: "JOhn is come in!", likesCount:14},
    ]
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