import React from "react";
import {store} from "../../redux/state";
import './Friends.module.css';


export const Friends = (props: any) => {

    return (
        <div>
            <div>{props.name}</div>
            <img
                src='https://media.wired.com/photos/593261cab8eb31692072f129/master/w_2560%2Cc_limit/85120553.jpg'/>
        </div>
    )
}
export const FriendsReturn = (props: any) => {

    if (!props.name) {
        return null};
       let friendsElement = props.name.map((n: { id: number, name: string }) => <Friends key={n.id} name={n.name}
                                                                                          id={n.id}/>);
        props.name.map((f:any) => {return f.name});
        return <div className='name'>{friendsElement}</div>;


}