import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
export const Header = (props:any) => {
    return  <header className={classes.contents}>
        <img src={'https://www.reestr35.ru/img/products/big/8509.jpg'}/>
        <div className={'loginBlock'}>
            {props.isAuth ? props.login:
            <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}