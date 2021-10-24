import {signUp, login, joinChat} from "./../DAL/DAL";
import {stopSubmit} from "redux-form";


let AUTH = "AUTH";
let AUTH_FETCHING = "AUTH_FETCHING";
let JOIN_CHAT = "JOIN_CHAT";


let initialState = {
  isAuth: false,
  isFetching: false,
  userData:{
     name:"Tim",
     surname:"T",
     login:"TTT",
     eMail:"qwewqewq@dwd.we",
     password:"wewew",
  },
 myChats:[

 ]
};

function authReducer(state=initialState, action){
  switch(action.type){
    case AUTH:{
      let {type, ...body} = action;
      return {...state, ...body}
    }
    case AUTH_FETCHING:{
      return {...state, isFetching: action.isFetching}
    }
    case JOIN_CHAT:{
       return {...state, myChats:state.myChats.concat([action.chat])}
    }
    default: return state
  }
}

export function authAC(data){
  return {
    type: AUTH,
    isAuth: true,
    isFetching: false,
    userData: data
  }
}


export function fetchingAC(fetch){
  return{
    type: AUTH_FETCHING,
    isFetching: fetch
  }
}

function joinChatAC({chatId, name}){
  return{
    type: JOIN_CHAT,
    chat:{chatId:chatId, name:name}
  }
}

export function registrationError({statusCode, message}){
  return{
  }
}

export function loginThunk(data){
  return function(dispatch){
    let {eMail, password} = data;
    login(eMail, password).then((data)=>{if(data.data.statusCode == 0){dispatch(authAC(data.data.data))};if(data.data.statusCode !== 0){dispatch(stopSubmit("LoginForm",{_error:{message:data.data.message, statusCode:data.data.statusCode}}))}})
  }
}


export function authThunk(data){
  return function(dispatch){
    signUp(data).then((data)=>{if(data.data.statusCode == 0){dispatch(authAC(data.data))}else if(data.data.statusCode != 0){dispatch(stopSubmit("RegistrationForm",{_error:{message:data.data.message, statusCode: data.data.statusCode}}));dispatch(fetchingAC(false))}},(err)=>{debugger})
  }
}

export function joinChatThunk(obj){
  return function(dispatch){
     joinChat(obj).then((data)=>{dispatch(joinChatAC(data.data))})
  }
}

//{_error:{message:data.data.message, statusCode: data.data.statusCode}}

export default authReducer;
