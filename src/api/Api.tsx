import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "b8feb348-3279-40de-8aa9-f14811999b9a"}

})

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,
    ).then(response => response.data)

}

export const getProfile = (UserID: any) => {
    return instance.get(`profile/` + UserID)
        .then(response => response.data)
}


export const getUnFollow = (userID: any) => {
    return instance.delete(`follow/?${userID}`,).then(response => response.data)
}
export const getFollow = (userID: any) => {
    return instance.post(`follow/?${userID}`,).then(response => response.data)
}

export const AuthAPI = {me() {
    return instance.get('auth/me',).then(response => response.data)
}}

