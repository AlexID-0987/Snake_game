import React  from "react";
import cn from './snake.module.css'
import {useDispatch, useSelector} from "react-redux";
import Snake from "./Snake";

function Snakecomponent(props){
    console.log(props)
    const dispatch=useDispatch()
    const cnakeX=useSelector(state=>state.move.x)
    const cnakeY=useSelector(state=>state.move.y)
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
        ExitPole()
    }
    function Vict(){
        if (cnakeX == props.state[0] && cnakeY == props.state[1]) {
            dispatch({type: 'COUNTER', payload: 1})
            alert("OKEY!!!")
        }
    }
    function ExitPole(){
        if(cnakeX>=488){
            dispatch({type:'UPDATE',payload:5})
        }
        if(cnakeX<=1){
            dispatch({type:'UPDATE1',payload:5})
        }
        if(cnakeY>=488){
            dispatch({type:'UPDATE2',payload:5})
        }
        if(cnakeY<=1){
            dispatch({type:'UPDATE3',payload:5})
        }
    }


    console.log(cnakeX)
    console.log(cnakeY)
    return(
        <div >
            <Snake cnakeX={cnakeX} cnakeY={cnakeY}/>
        </div>

    )
}
export default Snakecomponent