import {createChat, getChatMessages} from "./../DAL/DAL";

let SET_CURRENT_CHAT = "SET_CURRENT_CHAT";

let initialState = {
  currentChat:{
    name: "name",
    admin:"admin",
    messages:[
      {
       message:"Hello",
       user: "Conor"
     },
     {
      message:"Hello Proper#12",
      user: "Jake"
    }
    ]
  }
}

function chatReducer(state=initialState, action){
    switch(action.type){
         case SET_CURRENT_CHAT:{
           return {...state, currentChat:{name:action.data.name, admin:action.data.name, messages:action.data.messages}}
         };
         default: return state
    }
}

function setChatAC(data){
  return{
    type: SET_CURRENT_CHAT,
    data: {
      messages:[...data.data.messages],
      admin: data.data.admin,
      name: data.data.name,
      id:data.data._id
    }
  }
}

export function chatCreationThunk(data){
  return function(dispatch){
    let {name, admin, password} = data;
    createChat(name,password,admin).then(console.log, console.log);
  }
}

export function getMessagesThunk(id){
  return function(dispatch){
     getChatMessages(id).then((data)=>{dispatch(setChatAC(data))}, (err)=>{alert(err.message)})
  }
}

export default chatReducer;
