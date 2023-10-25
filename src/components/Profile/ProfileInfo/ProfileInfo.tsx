import React from "react";
import {Preloader} from "../../common/preloader/preloader";
import {ProfileStatus} from './ProfileStatus'

export const ProfileInfo = (props:any) => {
   if (!props.profile) {
       return <Preloader/>
   }
    return     (<div>

    <div>
        <img src={props.profile.photos.large}/>
        <div>
            <ProfileStatus status={'status'}/>
        </div>
    </div>
    </div>)
}