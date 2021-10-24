import {connect} from "react-redux";
import {NavLink} from "react-router-dom";



function Profile(props){
   return (
     <div>
         <div>{props.name + " " + props.surname}</div>
         <div>Login: {props.login}</div>
         <div>EMail: {props.eMail}</div>
         <NavLink to="/content/createChat"><div>Create new chat</div></NavLink>
     </div>
   )
}

function ProfileContainer(props){
  if(props.isFetching){return <div>Fectcing...</div>};
  if(!props.isAuth){return <div>Please sign in to watch this page</div>}
  return (
    <div><Profile {...props.userData}/></div>
  )
}

function stateToProps(state){
  return {
    isAuth: state.forAuth.isAuth,
    isFetching:state.forAuth.isFetching,
    userData: state.forAuth.userData
  }
}

function dispatchToProps(dispatch){
  return{

  }
}

export default connect(stateToProps, dispatchToProps)(ProfileContainer)
