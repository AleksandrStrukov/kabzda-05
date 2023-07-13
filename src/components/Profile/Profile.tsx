import React from "react";
import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Friends} from "../Friends/Friends";


export const Profile = (props:any) => {
    return <div className={classes.content}>
        <ProfileInfo />
        <MyPosts posts={props.posts}/>

    </div>;
}