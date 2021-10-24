import axios from "axios";

let URL = "http://localhost:5000";

export function signUp(data){
  return axios.post(URL + "/users/signup", data);
}

export function longPoint(message){
  return axios.get(URL + "/testing/",{params:{message:message}})
}

export function login(eMail,password){
  return axios.get(URL + "/users/login",{params:{eMail:eMail,password:password}})
}

export function createChat(name,password,admin){
  return axios.post(URL + "/chat/createChat",{name:name, password:password, admin:admin})
}

export function getChats(){
  return axios.get(URL + "/chat/getChats").then((data)=>{return data.data.map((e,i)=>{return {id:e._id,name:e.name}})},(err)=>{return null})
}
getChats().then(console.log)
export function getChatMessages(id){
  return axios.get(URL + "/chat/getMessages",{params:{id:id}})
}

export function addMessage({message,name,id,user}){
  return axios.patch(URL + "/chat/addMessage",{id:id,name:name,user:user,message:message});
}

export function joinChat(obj){
  //obj must contain userId, chatId, name
  return axios.patch(URL + "/users/joinChat",obj)
}
