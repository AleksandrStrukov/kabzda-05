import React from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./post/Post";

export const MyPosts = () => {
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
            <Post message={'Hey!Are you OK?'} like={12}/>
            <Post message={"JOhn is come in!"} like={20}/>

        </div>
    </div>;
}