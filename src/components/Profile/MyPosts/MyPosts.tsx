import React from "react";
import  classes from "./MyPosts.module.css"
import {Post} from "./post/Post";
export const MyPosts = () => {
    return   <div>
            <div>
                My posts
            </div>
            <div>
                New post
            </div>
            <div className={classes.posts}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>

            </div>
        </div>;
}