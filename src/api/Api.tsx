import axios from "axios";

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{"API-KEY": "b8feb348-3279-40de-8aa9-f14811999b9a"}

})

export const getUsers = (currentPage = 1, pageSize = 10) => {
    instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(response => response.data)

}

export const getProfile = (UserID: any) => {
    instance.get(`profile/` + UserID)
        .then(response => response.data)
}

export const getHeader = (currentPage = 1, pageSize = 10) => {
    instance.get('auth/me', ).then(response => response.data)
}
export const getUnFollow = (u:any) => {
    instance.delete(`follow/?${u.id}`, ).then(response => response.data)
  }
export const getFollow = (u:any) => {
    instance.post(`follow/?${u.id}`, ).then(response => response.data)
}


