import React  from "react";
import cn from './snake.module.css'
import {useDispatch, useSelector} from "react-redux";

function Snake(props){
const dispatch=useDispatch()
    const cnakeX=useSelector(state=>state.move.x)
    const cnakeY=useSelector(state=>state.move.y)

    window.onkeydown = function (event) {
        console.log(event)
        switch (event.key){
            case 'ArrowRight':
                dispatch({type: 'RIGHT', payload: 5})
                break
            case 'ArrowDown':
                dispatch({type:'DOWN',payload:5})
                break
            case 'ArrowUp':
                dispatch({type:'UP',payload:5})
                break
            case 'ArrowLeft':
                dispatch({type:'LEFT',payload:5})
        }
    }
    const style={
        left:cnakeX+'px',
        top:cnakeY+'px'
    }
    console.log(cnakeX)
    return(
        <div className={cn.item}>
            <>
                <div className={cn.item1} key={Date.now()} style={style}></div>
            </>

        </div>
    )
}
export default Snake