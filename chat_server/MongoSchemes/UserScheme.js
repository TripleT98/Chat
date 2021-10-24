import mongoose from "mongoose";

let Users = new mongoose.Schema({
  name:{type:String, required: true},
  surname:{type:String, required: true},
  login:{type: String, required: true},
  eMail:{type: String, required:true},
  password:{type: String, required: true},
  role:{type: String, default: "common user"},
  myChats:{type:Array, default:[]}
})

let User = mongoose.model("Users", Users);
export default User;
