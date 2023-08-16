import React from "react";
import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Friends} from "../Friends/Friends";
import {store} from "../../redux/state";


export const Profile = (props:any) => {
    return <div className={classes.content}>
        <ProfileInfo />
        <MyPosts posts={props.posts}
                 addPost={props.addPost}
                 dispatch={props.dispatch}/>

    </div>;
}