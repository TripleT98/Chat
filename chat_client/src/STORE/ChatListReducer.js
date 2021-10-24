import {getChats} from "./../DAL/DAL";

let FILL_CHATLIST = "FILL_CHATLIST";

let initialState = {
  chats:[{name:"name", id:123}]
}

function chatListReducer(state = initialState, action){
   switch(action.type){
     case FILL_CHATLIST:{
       return {...state, chats:action.chats}
     }
     default: return state
   }
}

function setChatListAC(data){
  return{
    type:FILL_CHATLIST,
    chats:[...data]
  }
}



export function getChatsThunk(){
    return function(dispatch){
      getChats().then((data)=>{dispatch(setChatListAC(data))}, (err)=>{console.log(err.message)})
    };
}



export default chatListReducer;
