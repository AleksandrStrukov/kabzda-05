import React from "react";
import styles from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/images.jpg'

type photoResponseType = {
    small: null | string
    large: null | string
}
type itemsType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: photoResponseType
    status: null | string
    followed: boolean
}
type responseType = {
    items: Array<itemsType>

}
export const UsersFunction = (props: any) => {
    if (props.user.length === 0) {
        axios.get<responseType>('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            props.setUsers(response.data.items)
        })


        return <div>
            <div>
                <span>1</span>
                <span>2</span>
                <span className={styles.selected}>3</span>
                <span>4</span>
            </div>
            {props.users.map((u: any) => (<div key={u.id}>
            <span>
                <div>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>

            </div>
            <div>
                {u.followed ? <button onClick={() => {
                        props.unfollow(u.id)
                    }}>Unfollow</button> :
                    <button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>}
            </div>
            </span>
                <span>
<span>
    <div>{u.name}</div><div>{u.status}</div>
</span>
<span>
    <div>{u.location.city}</div>
    <div>{u.location.country}</div>
</span>
            </span>
            </div>))}
        </div>
    }
}