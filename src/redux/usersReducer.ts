const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSizee: 5,
    totelUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};
const UsersReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map((u: any) => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
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
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
            case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totelUsersCount: action.count
            }
            case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
            case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching ? [...state.followingInProgress, action.userID] :
                    state.followingInProgress.filter(id => id!= action.userID)
            }


        default:
            return state;
    }

}
export const follow = (userID: string) => ({type: FOLLOW, userID})
export const unfollow = (userID: string) => ({
    type: UNFOLLOW, userID
})
export const setUsers = (users: any) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotelUsersCount = (totelCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totelCount})
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching: boolean, userID:string) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID})
export default UsersReducer;