import Profile from "./Profile/Profile";
import CreateChat from "./ChatCreationForm/ChatCreationForm";
import {NavLink, Route} from "react-router-dom";

function Content(props){
  return (
    <div>
    <Route path="/content/profile" render={()=>{return <Profile />}} />
    <Route path="/content/createChat" render={()=>{return <CreateChat />}} />
    </div>
  )
}

function ContentContainer(props){
  return (
    <div><Content /></div>
  )
}

export default ContentContainer;
