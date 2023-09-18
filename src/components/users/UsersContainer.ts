import React from "react";
import {connect} from "react-redux";

import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import {Users} from "./Users";


let maoStateToProps =(state: any)=> {
return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totelUsersCount:state.usersPage.totelUsersCount
}
}
let mapDispatchToProps =(dispatch: any)=> {
    return {
        follow: (userID:string)=> {
            dispatch(followAC(userID));
        },
        unfollow: (userID: string):void=> {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users:any) => {
            dispatch(setUsersAC(users ))
        }
    }
}


export default connect(maoStateToProps, mapDispatchToProps) (Users);