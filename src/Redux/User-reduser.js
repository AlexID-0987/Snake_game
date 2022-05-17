export const ADD='ADDUSER',DELETE='DELETE'
let initialstate={
    users:[
        {id:Date.now(),name:'Fred'},
        {id:Date.now(),name:'Helga'},
        {id:Date.now(),name:'Lee'}
    ]
}
const userReduser=(state=initialstate,action)=>{
    switch (action.type){
        case ADD:
            let add = {...state, users:[...state.users, action.payload]}
            return add
        default:
            return state

    }
}
export  default userReduser