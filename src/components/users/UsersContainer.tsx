import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {
    follow,
    setCurrentPage,
    setTotelUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReducer";


import axios from "axios";
import {Preloader} from "../common/preloader/preloader";

type photoResponseType = {
    small: null | string
    large: null | string
}
type itemsType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: photoResponseType
    status: null | string
    followed: boolean
}
type responseType = {
    items: Array<itemsType>
    totalCount: number

}

class UsersAPIComponent extends React.Component<any, any> {


    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get<responseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotelUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {

        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get<responseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            });
        this.props.toggleIsFetching(false);
    }
    render = () => {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersAPIComponent totelUsersCount={this.props.totelUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   Users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        </>

    }
}


let maoStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totelUsersCount: state.usersPage.totelUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch: any) => {
//     return {
//         follow: (userID: string) => {
//             dispatch(followAC(userID));
//         },
//         unfollow: (userID: string): void => {
//             dispatch(unfollowAC(userID));
//         },
//         setUsers: (users: any) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotelUsersCount: (totalCount: number) => {
//             dispatch(setTotelUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching:boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }


export default connect(maoStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotelUsersCount, toggleIsFetching
})(UsersAPIComponent);