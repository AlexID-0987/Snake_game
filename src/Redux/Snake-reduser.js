let initialState={
    x:90,
    y:130,
    count:0


}
const Move=(state=initialState,action)=>{
    switch (action.type){
        case 'RIGHT':
            return {...state, x:state.x+action.payload}
        case 'DOWN':
            return {...state, y:state.y+action.payload}
        case 'UP':
            return {...state, y:state.y-action.payload}
        case 'LEFT':
            return {...state,x:state.x-action.payload}
        case 'UPDATE':
            return {...state, x:state.x-action.payload}
        case 'UPDATE1':
            return {...state, x:state.x+action.payload}
        case 'UPDATE2':
            return {...state, y:state.y-action.payload}
        case 'UPDATE3':
            return {...state, y:state.y+action.payload}
        case 'COUNTER':
            return {...state, count:state.count+action.payload}
        default:
            return state
    }

}
export  default Move