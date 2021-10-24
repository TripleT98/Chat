import {Field, reduxForm} from "redux-form";
import {Text} from "./../../Registration/CustomInputs/CustomInputs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {isVal} from "./../../Registration/Validators/Validators";
import {chatCreationThunk} from "./../../STORE/ChatReducer";


function ChatCreationForm(props){
  return (
    <div>
        <form onSubmit={props.handleSubmit(props.submitChatForm)}>
        <Field component={Text} name="name" placeholder="Chat name" validate={[isVal]} />
        <Field component={Text} name="password" placeholder="Password" validate={[isVal]} />
        <button type="submit">Create</button>
        </form>
    </div>
  )
}

let ReduxChatForm = reduxForm({form:"Chat Creation"})(ChatCreationForm);

function Container(props){
  if(!props.isAuth){<Redirect to="/login"/>};

  function submitChatForm(data){
    data.admin = props.admin;
    props.createChat(data);
  }

  return (
    <div>
        <div>Create Chat</div>
        <ReduxChatForm {...props} submitChatForm={submitChatForm}/>
    </div>
  )
}

function stateToProps(state){
  return {
     isAuth: state.forAuth.isAuth,
     admin: state.forAuth.userData.login
  }
}

function dispatchToProps(dispatch){
  return {
     createChat:function(data){
       dispatch(chatCreationThunk(data))
     }
  }
}

export default connect(stateToProps, dispatchToProps)(Container)
