import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/PropfileReducer";
import {Redirect, useParams, withRouter} from "react-router-dom";
import {getProfile} from "../../api/Api";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

type ProfileContainerType = {
    id: string
    getUserProfile: (userID: any) => void
    match: any
    profile: any
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
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,

});

let WithURLDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, {getUserProfile})(WithURLDataContainerComponent);