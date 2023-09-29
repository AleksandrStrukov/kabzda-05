import React from "react";
import {friendsType} from "../../redux/state";
import './Friends.module.css';

type FriendsProps = {
    friends: friendsType;
};

export const Friends: React.FC<FriendsProps> = ({ friends }) => {
    return (
        <div>
            <div>{friends.name}</div>
            <img src='https://media.wired.com/photos/593261cab8eb31692072f129/master/w_2560%2Cc_limit/85120553.jpg' />
        </div>
    );
}
type FriendsReturnProps = {
    friends: Array<friendsType>;
};
export const FriendsReturn: React.FC<FriendsReturnProps> = ({ friends }) => {

    if (!friends) {
        return null;
    }


    let friendsElement = friends.map((n: friendsType) => (
        <Friends key={n.id} friends={n} />
    ));

    friends.map((f:any) => f.name);
    return <div className='name'>{friendsElement}</div>;

}