import users from "../components/users/Users";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    // users: [
    //     {
    //         id: 1,
    //         photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Ftwitch%2Ftemplates%2Ftwitch-profile-picture%2F&psig=AOvVaw3adpDoE_VjtgN8ArSkm2RL&ust=1693762642309000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKi60da7jIEDFQAAAAAdAAAAABAE',
    //         followed: false,
    //         fullName: 'AlekOs',
    //         status: 'I am living in USA',
    //         location: {city: 'Washington', country: 'USA'}
    //     },
    //     {
    //         id: 2,
    //         photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Ftwitch%2Ftemplates%2Ftwitch-profile-picture%2F&psig=AOvVaw3adpDoE_VjtgN8ArSkm2RL&ust=1693762642309000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKi60da7jIEDFQAAAAAdAAAAABAE',
    //         followed: false,
    //         fullName: 'DimaF',
    //         status: 'I know you',
    //         location: {city: 'Monreal', country: 'Canada'}
    //     },
    //     {
    //         id: 3,
    //         photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Ftwitch%2Ftemplates%2Ftwitch-profile-picture%2F&psig=AOvVaw3adpDoE_VjtgN8ArSkm2RL&ust=1693762642309000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKi60da7jIEDFQAAAAAdAAAAABAE',
    //         followed: true,
    //         fullName: 'SopolP',
    //         status: 'I am here',
    //         location: {city: 'Petersburg', country: 'USA'}
    //     },
    //     {
    //         id: 4,
    //         photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Ftwitch%2Ftemplates%2Ftwitch-profile-picture%2F&psig=AOvVaw3adpDoE_VjtgN8ArSkm2RL&ust=1693762642309000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKi60da7jIEDFQAAAAAdAAAAABAE',
    //         followed: true,
    //         fullName: 'KIKILOPL',
    //         status: 'I am in work travel',
    //         location: {city: 'Paris', country: 'France'}
    //     },
    //
    // ],

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