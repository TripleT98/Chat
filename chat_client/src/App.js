import classes from "./App.module.css";
import {Provider} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from "./Nav/Nav";
import LoginPage from "./Login/Login";
import RegistrationPage from "./Registration/Registration";
import ContentPage from "./Content/Content";
import TestingMessageField from "./MessageWindow/MessageWindow";
import ChatList from "./ChatList/ChatList";
import store from "./STORE/STORE";
import {longPoint} from "./DAL/DAL";



function App() {
  //setInterval(()=>{longPoint("Hello").then(console.log)},1000)
  return (
  <Provider store={store}>
    <BrowserRouter>
         <div><AppContainer /></div>
    </BrowserRouter>
  </Provider>
  );
}

function AppContainer(props){
  return (
    <div>
        <div className={classes.navBar}>
        <NavBar />
        </div>
        <div className={classes.main}>
        <Route path="/login" exact render={()=>{return <LoginPage />}} />
        <Route path="/signup" exact render={()=>{return <RegistrationPage />}} />
        <Route path="/content" render={()=>{return <ContentPage />}} />
        <Route path="/messageWindow/:id" render={()=>{return <TestingMessageField />}} />
        <Route path="/chatList" render={()=>{return <ChatList />}} />
        </div>
    </div>
  )
}

export default App;
