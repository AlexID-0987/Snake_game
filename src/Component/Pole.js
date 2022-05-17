import React from 'react';
import p1 from './pole.module.css'
import Snake from "./Snake";
import Food_comp from "./Food_comp";
import {useSelector} from "react-redux";
import Snakecomponent from "./Snakecomponent";
import Informpole from "./Informpole";

function Pole(props){
    let move1=useSelector(state=>state.move.count)
    return(
        <div className={p1.item}>
           <div className={p1.item1}>
               <Snakecomponent state={props.state.food} random={props.random}/>
               <Food_comp state={props.state.food}/>

           </div>
            <div className={p1.informpole}>
                <Informpole move1={move1}/>

            </div>
        </div>
    )
}
export  default Pole