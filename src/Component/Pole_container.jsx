import React from "react";
import Pole from "./Pole";
function  Pole_container(){
    const getRandom=()=>{
        let min=1,max=488;
        let x=Math.floor((Math.random()*(max-min+1)+min)/2)*2
        let y=Math.floor((Math.random()*(max-min+1)+min)/2)*2
        return [x,y]
    }
    let state={
        food:getRandom(),


    }
    return(
        <div>
            <h2>Snake Game</h2>
            <Pole random={getRandom()} state={state}/>

        </div>
    )
}
export default Pole_container