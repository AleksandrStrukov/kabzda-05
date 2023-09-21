import React from "react";
import {connect} from "react-redux";

import {followAC, setCurrentPageAC, setTotelUsersCountAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";



let maoStateToProps =(state: any)=> {
return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totelUsersCount:state.usersPage.totelUsersCount,
    currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
    },
        setTotelUsersCount: (totalCount: number) => {
            dispatch(setTotelUsersCountAC(totalCount))
        }
    }
}


export default connect(maoStateToProps, mapDispatchToProps) ;