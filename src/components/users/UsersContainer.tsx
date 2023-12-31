import React from "react";
import {connect} from "react-redux";

import {
    followSuccess,
    setCurrentPage,
    toggleFollowingProgress,
    unfollowSuccess
} from "../../redux/usersReducer";


import {Preloader} from "../common/preloader/preloader";
import {getUsers} from "../../api/Api";

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
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);

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
                               followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(maoStateToProps, {
    follow: followSuccess, unfollow: unfollowSuccess, setCurrentPage, toggleFollowingProgress, getUsers
})(UsersAPIComponent);