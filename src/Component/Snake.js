import React  from "react";
import cn from './snake.module.css'

function Snake(props){
    let style={
        left:props.cnakeX,
        top:props.cnakeY
    }
    return(
        <div >
            <div className={cn.item}>
                <div className={cn.item1} style={style}></div>
            </div>
        </div>

    )
}
export default Snake