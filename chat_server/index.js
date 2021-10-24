import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRouter from "./User/UserRouter.js";
import ChatRouter from "./Chat/ChatRouter.js";


let PORT = 5000;
let MONGO_URL = "mongodb+srv://Timur:timur1982T@cluster0.tggob.mongodb.net/Chat?retryWrites=true&w=majority";

let app = express();

app.use(express.json());
app.use(cors());
app.use("/users", UserRouter);
app.use("/chat", ChatRouter);

async function startApp(){
  try{
    await mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{console.log("Connection to mongoDB is complete!")}, ()=>{console.log("Cannot conncet to mongoDB!")});
    app.listen(PORT, ()=>{console.log("Server is running on port: " + PORT)})
  }catch(error){
    console.log(error.message)
  }
}

app.get("/",(req,res,next)=>{console.log("1");next()},(req,res)=>{res.send(res.send(req.query))});
app.get("/testing",(req,res,next)=>{res.json({status:"OK", message:req.query.message})})

startApp();
