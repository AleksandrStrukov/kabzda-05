import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/PropfileReducer";
import {withRouter} from "react-router-dom";
import {getProfile} from "../../api/Api";

type ProfileContainerType = {
    id: string
    getUserProfile: (userID: any) => void
    match: any
    profile:any
}

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        let UserID = this.props.match.params.userID;
        if (!UserID) {
            UserID = 1
        }
        this.props.getUserProfile(UserID);

    }


    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile
});

let WithURLDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {getUserProfile})(WithURLDataContainerComponent);