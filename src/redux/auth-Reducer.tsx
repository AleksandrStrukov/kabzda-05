import {AuthAPI} from "../api/Api";

const SET_USER_DATA = 'SET_USER_DATA';
const UNFOLLOW = 'UNFOLLOW';




let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false
};
const AuthReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }

        case UNFOLLOW:
            return {
                ...state, users: state.users.map((u: any) => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }



        default:
            return state;
    }

}
export const follow = (userID: string) => ({type: SET_USER_DATA, })
export const unfollow = (userID: string) => ({
    type: UNFOLLOW, userID
})
export const setAuthUserData = (userID: any, email:any, login:any) => ({type: SET_USER_DATA, data:{userID,email,login}})
export const getAuthUserData = () => (dispatch:any) => {
    AuthAPI.me()
        .then((data) => {
            if (data.resultCode === 0) {
                let {userID, email, login} = data.data;
                dispatch(setAuthUserData(userID, email, login));
            }
        });
}

export default AuthReducer;