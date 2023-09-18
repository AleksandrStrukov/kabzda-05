import React from "react";
import classes from "./DialogsItem.module.css"
import {NavLink} from "react-router-dom";
type DialogItemType ={
    name: string;
    id: number
}

export const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id
    return <div>
    <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
          <div>
              <img src='https://otkritkis.com/wp-content/uploads/2022/06/ra8je.jpg'/>
        </div>
    </div>
    }

