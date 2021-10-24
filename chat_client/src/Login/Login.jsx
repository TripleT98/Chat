import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Text, Checkbox} from "./../Registration/CustomInputs/CustomInputs";
import {Redirect} from "react-router-dom";
import {loginThunk} from "./../STORE/AuthReducer";

function Login(props){
  return (
    <div>
        <form onSubmit={props.handleSubmit(props.submitDataXXX)}>
            <Field component={Text} placeholder="EMail" name="eMail" />
            <Field component={Text} placeholder="Password" name="password" />
            <div>{props.error?.message||"No errors"}</div>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

function LoginContainer(props){
  if(props.isAuth){
    return <Redirect to="/content/profile" />
  }
  function submitLoginForm(data){
      props.submitLoginData(data);
  }
  return (
    <div><ReduxLoginForm {...props} submitDataXXX={submitLoginForm}/></div>
  )
}

let ReduxLoginForm = reduxForm({form:"LoginForm"})(Login);

function stateToProps(state){
  return {
    isAuth:state.forAuth.isAuth
  }
}

function dispatchToProps(dispatch){
  return{
    submitLoginData:function(data){
      dispatch(loginThunk(data));
    }
  }
}

export default connect(stateToProps, dispatchToProps)(LoginContainer);
