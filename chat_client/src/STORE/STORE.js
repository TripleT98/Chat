import {createStore,combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import authReducer from "./AuthReducer";
import chatReducer from "./ChatReducer";
import chatListReducer from "./ChatListReducer"

let reducers = combineReducers({
  form: formReducer,
  forAuth: authReducer,
  forChat: chatReducer,
  forChatList: chatListReducer
})

let store =createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store = store;
