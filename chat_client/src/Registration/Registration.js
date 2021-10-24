import {reduxForm, Field} from "redux-form";
import {Text, Checkbox} from "./CustomInputs/CustomInputs";
import {connect} from "react-redux";
import {authThunk} from "./../STORE/AuthReducer";
import {Redirect} from "react-router-dom";
import {isVal,maxLength, mainLength} from "./Validators/Validators";

let maxLength40 = maxLength(40);
let mainLength8 = mainLength(8);

function Registration(props){
  return (
    <div>
       <form onSubmit={props.handleSubmit(props.submitData)}>
          <Field component={Text} type="text" name="name" placeholder="Name" validate={[isVal, maxLength40]}/>
          <Field component={Text} type="text" name="surname" placeholder="Surname" validate={[isVal, maxLength40]}/>
          <Field component={Text} type="text" name="login" placeholder="Login" validate={[isVal, maxLength40]} asyncErr={props.error?.statusCode==2?props.error.message:""} />
          <Field component={Text} type="text" name="eMail" placeholder="EMail" validate={[isVal, maxLength40]} asyncErr={props.error?.statusCode==3?props.error.message:""} />
          <Field component={Text} type="text" name="password" placeholder="Password" validate={[isVal, maxLength40, mainLength8]}/>
          <Field component={Text} type="text" name="repeatPassword" placeholder="Repeat password" validate={[isVal, maxLength40, mainLength8]}/>
          <Field component={Checkbox} type="checkbox" name="rememberMe" placeholder="Remember me" />
          <button type="submit" disabled={props.invalid}>Submit</button>
       </form>
    </div>
  )
}

//asyncErr={props.error?.statusCode==2?props.error.message:""}
//asyncErr={props.error?.statusCode==3?props.error.message:""}

function RegistrationContainer(props){
  if(props.isAuth){return <Redirect to="/content/profile" />}
  function submit(data){
    props.signUp(data);
  }
  return props.isFetching?<div>Fetching...</div>:(
    <div>
    <div>Sign up</div>
    <RegistrationForm submitData={submit}/>
    </div>
  )
}

let RegistrationForm = reduxForm({
  form:"RegistrationForm"
})(Registration);

function stateToProps(state){
  return{
     isAuth: state.forAuth.isAuth,
  }
}

function dispatchToProps(dispatch){
  return{
    signUp:function(data){
        dispatch(authThunk(data));
    }
  }
}

export default connect(stateToProps,dispatchToProps)(RegistrationContainer);
