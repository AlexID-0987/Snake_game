let initialState={
    x:90,
    y:130
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
        default:
            return state
    }

}
export  default Move