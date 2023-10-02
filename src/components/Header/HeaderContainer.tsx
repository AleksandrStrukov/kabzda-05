import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-Reducer";
import {getHeader} from "../../api/Api";

export class HeaderContainer extends React.Component {
    componentDidMount() {
        getHeader()
            .then((data) => {
                if (data.resultCode === 0) {
                    let {userID, email, login} = data.data;
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