import  React from 'react'
import f1 from './food_compon.module.css'
function Food_comp(props){
    const style={
        left:`${props.state[0]}%`,
        top:`${props.state[1]}%`
    }
    return(
      <div className={f1.item} style={style}>

      </div>
    )
}
export  default Food_comp