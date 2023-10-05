import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/PropfileReducer";
import {useParams} from "react-router-dom";
import {getProfile} from "../../api/Api";

type ProfileContainerType = {
    id: string
    getUserProfile: (userID: any) => void
    match: any
    profile:any
}

export class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        let UserID = this.props.match.params.userID;
        if (!UserID) {
            UserID = 1
        }
        this.props.getUserProfile(UserID);

    }


    render() {
        if (!this.props.isAuth)
            return <Redirect to={'/Login'}/>

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile
    isAuth:state.auth.isAuth
});

let WithURLDataContainerComponent = useParams(ProfileContainer);
export default connect(mapStateToProps, {getUserProfile})(WithURLDataContainerComponent);