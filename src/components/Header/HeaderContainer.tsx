import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-Reducer";
import {AuthAPI} from "../../api/Api";

type HeaderContainerProps = {
    isAuth: boolean;
    login: string;
    getAuthUserData: () => void;
};

export class HeaderContainer extends React.Component<HeaderContainerProps> {
    componentDidMount() {
        this.props.getAuthUserData();
    }


    render() {
        return <Header {...this.props}/>
    }

}

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)