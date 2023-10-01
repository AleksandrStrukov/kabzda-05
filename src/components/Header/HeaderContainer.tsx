import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-Reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let {userID, email, login} = response.data.data;
                    this.props.setAuthUserData(userID, email, login);
                }
            });
    }

    render() {
        return <Header {...this.props}/>
    }

}

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login:state.auth.login
})
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)