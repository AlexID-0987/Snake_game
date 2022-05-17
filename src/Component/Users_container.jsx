import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {ADD} from "../Redux/User-reduser";
import Users from "./Users";
import uscon from './userscontainer.module.css'
function Users_container(){
    const USERS=useSelector(state=>state.us.users)
    const dispath=useDispatch()
    let newitem=React.createRef()
    let rez=USERS.map(body=><div className={uscon.arr}>{body.name}</div>)
    const Save=()=>{
        let item1=newitem.current.value
        const useritem={
            name:item1,
            id:Date.now()
        }
        newitem.current.value=' '
        dispath({type:ADD,payload:useritem})
    }
    return(
        <div>
            <Users rez={rez} Save={Save} newitem={newitem}/>
        </div>
    )
}
export default Users_container