import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import classes from "./Nav.module.css";


function Navigation(props){
  return (
    <div>
        <div className={classes.loginRef +" " + !props.isAuth?classes.lll:""}>{props.isAuth?"Ure allready logined":<NavLink to="/login">LoginPage</NavLink>}</div>
        <div>Chat</div>
        <div className={classes.regRef}>{props.isAuth?"Unlogin":<NavLink to="/signup">Registration Page</NavLink>}</div>
        <div><NavLink to="/chatList">Chat List</NavLink></div>
    </div>
  )
}

function NavigationContainer(props){
  return (
    <div><Navigation {...props}/></div>
  )
}

function stateToProps(state){
  return{
    isAuth: state.forAuth.isAuth
  }
}

function dispatchToProps(dispatch){
  return{

  }
}

export default connect(stateToProps ,dispatchToProps)(NavigationContainer);
