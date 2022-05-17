import React from 'react'
import us from './users.module.css'


function  Users(props){
    return(
        <div className={us.item}>
            <div className={us.lab}>
                <label className={us.lab1}>Users name:</label>
            </div>
            <div className={us.item1}>
                <textarea ref={props.newitem}/>
            </div>
            <div className={us.butt}>
                <button className={us.butt1} onClick={() => props.Save()}>Add</button>
            </div>
            <div className={us.arr}>
                <div className={us.arr1}>{props.rez}</div>
            </div>

        </div>
    )
}
export default Users