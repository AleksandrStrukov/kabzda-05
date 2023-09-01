import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {userInfo} from "os";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import users from "./Users";

let maoStateToProps =(state: any)=> {
return {
    users: state.usersPage.users;
}
}
let mapDispatchToProps =(dispatch: any)=> {
    return {
        follow: (userID:string)=> {
            dispatch(followAC(userID));
        },
        unfollow: (userID: string)=> {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users ))
        }
    }
}


export default connect(maoStateToProps, mapDispatchToProps) (Users);