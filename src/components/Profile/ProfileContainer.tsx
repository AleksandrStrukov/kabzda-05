import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/PropfileReducer";
import {withRouter} from "react-router-dom";

type ProfileContainerType = {
    id: string
    setUserProfile: (profile: any) => void
    match: any
}

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        let UserID = this.props.match.params.userID;
        if (!UserID) {
            UserID = 1
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + UserID)
            .then((response) => {

                this.props.setUserProfile(response.data);

            });
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
export default connect(mapStateToProps, {setUserProfile})(WithURLDataContainerComponent);