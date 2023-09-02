import React from "react";
import styles from './users.module.css'

let Users = (props: any) => {
if (props.user.length === 0) {

    props.setUsers(
        [
            {
                id: 1,
                photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Ftwitch%2Ftemplates%2Ftwitch-profile-picture%2F&psig=AOvVaw3adpDoE_VjtgN8ArSkm2RL&ust=1693762642309000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKi60da7jIEDFQAAAAAdAAAAABAE',
                followed: false,
                fullName: 'AlekOs',
                status: 'I am living in USA',
                location: {city: 'Washington', country: 'USA'}
            },
            {
                id: 2,
                photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Ftwitch%2Ftemplates%2Ftwitch-profile-picture%2F&psig=AOvVaw3adpDoE_VjtgN8ArSkm2RL&ust=1693762642309000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKi60da7jIEDFQAAAAAdAAAAABAE',
                followed: false,
                fullName: 'DimaF',
                status: 'I know you',
                location: {city: 'Monreal', country: 'Canada'}
            },
            {
                id: 3,
                photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Ftwitch%2Ftemplates%2Ftwitch-profile-picture%2F&psig=AOvVaw3adpDoE_VjtgN8ArSkm2RL&ust=1693762642309000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKi60da7jIEDFQAAAAAdAAAAABAE',
                followed: true,
                fullName: 'SopolP',
                status: 'I am here',
                location: {city: 'Petersburg', country: 'USA'}
            },
            {
                id: 4,
                photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Ftwitch%2Ftemplates%2Ftwitch-profile-picture%2F&psig=AOvVaw3adpDoE_VjtgN8ArSkm2RL&ust=1693762642309000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKi60da7jIEDFQAAAAAdAAAAABAE',
                followed: true,
                fullName: 'KIKILOPL',
                status: 'I am in work travel',
                location: {city: 'Paris', country: 'France'}
            },

        ],)}

    return <div>
        {props.users.map((u:any) => (<div key={u.id}>
            <span>
                <div>
                <img src={u.photo} className={styles.userPhoto}/>

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
    <div>{u.fullName}</div><div>{u.status}</div>
</span>
<span>
    <div>{u.location.city}</div>
    <div>{u.location.country}</div>
</span>
            </span>
        </div>))}
    </div>
}
export default Users