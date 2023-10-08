import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

export const withAuthRedirect = (Component:any) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/Login'/>
            return <Component {...this.props}/>
        }
    }


    let mapStateToPropsForRedirect = (state: any) => ({

        isAuth: state.auth.isAuth
    });
    let ConnectedAuthRedirectComponent = connect (mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}
