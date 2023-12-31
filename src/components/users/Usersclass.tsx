import React from "react";
import styles from './users.module.css'
import * as Axios from "axios";
import userPhoto from '../../assets/images/images.jpg'
import axios from "axios";
import {render} from "@testing-library/react";
import any = jasmine.any;
import {setTotelUsersCount} from "../../redux/usersReducer";

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
    totalCount: number

}
class Users extends React.Component<any, any> {


    componentDidMount() {
        axios.get<responseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setTotelUsersCount(response.data.totalCount)
        });
    }
onPageChanged = (pageNumber:number) => {
    this.props.setCurrentPage(pageNumber)
    axios.get<responseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then((response) => {
            this.props.setUsers(response.data.items)
        });
}
    render = () => {
        let pagesCount = Math.ceil(this.props.totelUsersCount / this.props.pageSize);
        let pages = [];
        for (let i =1; i<=pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            <div>
                {pages.map(p=> {
                    return <span className={this.props.currentPage && styles.selected} onClick={(e)=> {this.onPageChanged(p)}}>{p}</span>
                })}
            </div>

            {this.props.users.map((u: any) => (<div key={u.id}>
            <span>
                <div>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>

            </div>
            <div>
                {u.followed ? <button onClick={() => {
                        this.props.unfollow(u.id)
                    }}>Unfollow</button> :
                    <button onClick={() => {
                        this.props.follow(u.id)
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

export default Users;