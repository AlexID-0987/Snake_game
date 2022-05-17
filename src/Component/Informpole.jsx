import React from "react";
import ip from './informpole.module.css'
import Users from "./Users";
import Users_container from "./Users_container";

function Informpole (props){
    return(
        <div className={ip.item}>
            <div className={ip.item1}>
                <label className={ip.item2}>Counter: {props.move1!=0?props.move1:<label style={{color:'black'}}>{props.move1}</label>}</label>
                <p>&#8656; move left</p>
                <p>&#8658; move right</p>
                <p>&#8657; move up</p>
                <p>&#8659; move down</p>
                <button className={ip.but}><a href='/Pole_container'>Restart</a></button>
            </div>
            <div className={ip.users}>
                <Users_container/>
            </div>
        </div>
    )
}
export default Informpole