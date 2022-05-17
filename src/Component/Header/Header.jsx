import React from 'react'
import header from './header.module.css'
import {NavLink, Route} from "react-router-dom";

function Header(){
    return(
        <div className={header.item}>
            <NavLink className={header.text1} to='/FirstPageItem'><h1  className={header.text}>First Page</h1></NavLink>
            <NavLink className={header.text1} to='/Pole_container'><h1 className={header.text}>Second Page</h1></NavLink>
        </div>
    )
}
export default Header