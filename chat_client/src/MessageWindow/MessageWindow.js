import classes from "./MessageWindow.module.css"
import {useState, useEffect} from "react";
import {connect} from "react-redux";
import {getMessagesThunk} from "./../STORE/ChatReducer";
import {addMessage} from "./../DAL/DAL";
import {withRouter} from "react-router-dom";

function Message(props){

  return (
    <div className={classes.message}>
       <div className={classes.userName}>Author: {props.user||"No Author"}</div>
       <div className={classes.userMessage}>Message: {props.message || props.massege}</div>
    </div>
  )
}

function MessageWindow(props){
  let id = props.id;
  useEffect(()=>{
     let interval = setInterval(()=>{props.getMessages(id)},500);
     return ()=>{clearInterval(interval)};
  },[]);
  let messages = props.messages.map((elem,i)=>{return <Message {...elem} key={i}/>})
  return (
    <div className={classes.messageWindow}>
        {messages}
    </div>
  )
}

function MessageInput(props){
  let id = props.id;
  let [message, changeMessage] = useState("");
  return(
    <div>
       <form onSubmit={(e)=>{e.preventDefault();addMessage({message:message, user:"Timur", name:"Timur", id:id});changeMessage("")}}>
          <input type="text" placeholder="write a message" value={message} onChange={(e)=>{changeMessage(e.target.value)}}/>
          <button type="submit">Submit Message</button>
       </form>
    </div>
  )
}


function Container(props){
  return (
    <div>
       <MessageWindow messages={props.messages} getMessages={props.getMessages} id={props.match.params.id}/>
       <MessageInput id={props.match.params.id}/>
    </div>
  )
}

function stateToProps(state) {
   return{
     messages: state.forChat.currentChat.messages
   }
}

function dispatchToProps(dispatch){
  return{
      getMessages:function(id){
        dispatch(getMessagesThunk(id))
      }
  }
}

export default withRouter(connect(stateToProps, dispatchToProps)(Container));
