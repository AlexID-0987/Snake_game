import React from 'react';
import p1 from './pole.module.css'
import Snake from "./Snake";
import Food_comp from "./Food_comp";

function Pole(props){
    return(
        <div className={p1.item}>
           <div className={p1.item1}>
               <Snake state={props.state.food} random={props.random}/>
               <Food_comp state={props.state.food}/>

           </div>
        </div>
    )
}
export  default Pole