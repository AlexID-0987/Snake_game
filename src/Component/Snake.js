import React  from "react";
import cn from './snake.module.css'
import {useDispatch, useSelector} from "react-redux";

function Snake(props){
    console.log(props.random[0])
const dispatch=useDispatch()
    const cnakeX=useSelector(state=>state.move.x)
    const cnakeY=useSelector(state=>state.move.y)
    const count=useSelector(state=>state.move.count)
    window.onkeydown = function (event) {
        console.log(event)
        switch (event.key){
            case 'ArrowRight':
                dispatch({type: 'RIGHT', payload: 2})
                break
            case 'ArrowDown':
                dispatch({type:'DOWN',payload:2})
                break
            case 'ArrowUp':
                dispatch({type:'UP',payload:2})
                break
            case 'ArrowLeft':
                dispatch({type:'LEFT',payload:2})
                break
            case ' ':
                dispatch({type:'UPDATE',payload:cnakeX-20})

                break
        }
        Vict()
    }
    const style={
        left:cnakeX+'px',
        top:cnakeY+'px'
    }
    function Vict(){
        if (cnakeX == props.state[0] && cnakeY == props.state[1]) {
            dispatch({type: 'COUNTER', payload: 1})
            alert("OKEY!!!")
        }
    }
    console.log(cnakeX)
    console.log(cnakeY)
    return(
        <div >
            <div className={cn.item}>
                <div className={cn.item1} style={style}></div>
            </div>
            <div>
                {count}
            </div>

        </div>

    )
}
export default Snake