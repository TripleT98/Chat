import mongoose from "mongoose";

let Chats = new mongoose.Schema({
  name:{type:String, required:true},
  password:{type:String},
  admin:{type:Object, required: true},
  members:{type:Array, default:[]},
  messages:{type:Array, default:[]},
  advanсedMemebers:{type:Array, default:[]}
})

let Chat = mongoose.model("Chats", Chats);

export default Chat;
