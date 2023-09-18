import React from "react";
import styles from './users.module.css'
import * as Axios from "axios";
import userPhoto from '../../assets/images/images.jpg'
import axios from "axios";
import {render} from "@testing-library/react";
import any = jasmine.any;


class Users extends React.Component<any, any> {


    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response: any): any => {
            this.props.setUsers(response.items)
        });
    }

    render = () => {
        return <div>

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