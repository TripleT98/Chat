import {connect} from "react-redux";
import classes from "./ChatList.module.css";
import {useEffect} from "react";
import {getChatsThunk} from "./../STORE/ChatListReducer";
import {NavLink} from "react-router-dom";
import {joinChatThunk} from "./../STORE/AuthReducer";

function ChatPreview(props){
  return (
    <div className={classes.chat}>
       <NavLink to={"/messageWindow/"+props.id}>{props.name}</NavLink>
       <div>{props.isAuth?<button onClick={()=>{props.joinChat({userId:, chatId:props.id})}}>{props.myChats.some((e,i)=>{return e.id == props.id})?"Leave Chat":"Join Chat"}</button>:""}</div>
    </div>
  )
}

function ChatList(props){
  useEffect(()=>{
    props.setChatList();
  },[])
  let chats = props.chatList.map((e)=>{return <ChatPreview {...e} {...props.userData} joinChat={props.joinChat}/>})
  return (
    <div className={classes.chatList}>
       {chats}
    </div>
  )
}

function stateToProps(state){
  return{
      chatList: state.forChatList.chats,
      userData: state.forAuth
  }
}

function dispatchToProps(dispatch){
  return{
     setChatList:function(){
       dispatch(getChatsThunk());
     },
    joinChat:function(){
      dispatch(joinChatThunk())
    }
  }
}

export default connect(stateToProps, dispatchToProps)(ChatList)
