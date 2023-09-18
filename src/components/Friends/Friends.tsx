import React from "react";
import {friendsType, store} from "../../redux/state";
import './Friends.module.css';


export const Friends = (friends: Array <friendsType>) => {

    return (
        <div>
            <div>{friends}</div>
            <img
                src='https://media.wired.com/photos/593261cab8eb31692072f129/master/w_2560%2Cc_limit/85120553.jpg'/>
        </div>
    )
}
export const FriendsReturn = (friends: Array <friendsType>) => {

    if (!friends) {
        return null};
       let friendsElement = friends.map((n: { id: number, name: string }) => <Friends key={n.id} name={n.name}
                                                                                          id={n.id}/>);
    friends.map((f:any) => {return f.name});
        return <div className='name'>{friendsElement}</div>;


}