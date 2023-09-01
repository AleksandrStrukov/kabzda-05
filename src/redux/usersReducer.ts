import users from "../components/users/Users";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: 'AlekOs',
            status: 'I am living in USA',
            location: {city: 'Washington', country: 'USA'}
        },
        {
            id: 2,
            followed: false,
            fullName: 'DimaF',
            status: 'I know you',
            location: {city: 'Monreal', country: 'Canada'}
        },
        {
            id: 3,
            followed: true,
            fullName: 'SopolP',
            status: 'I am here',
            location: {city: 'Petersburg', country: 'USA'}
        },
        {
            id: 4,
            followed: true,
            fullName: 'KIKILOPL',
            status: 'I am in work travel',
            location: {city: 'Paris', country: 'France'}
        },

    ],

};
const UsersReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map((u:any) => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state, users: state.users.map((u:any) => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
            case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
                }

        default:
            return state;
    }

}
export const followAC = (userID: string) => ({type: FOLLOW, userID})
export const unfollowAC = (userID: string) => ({
    type: UNFOLLOW, userID
})
export const setUsersAC = (users: any) => ({type: SET_USERS, users})
export default UsersReducer;