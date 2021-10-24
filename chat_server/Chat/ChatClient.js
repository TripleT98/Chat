import Chat from "./../MongoSchemes/ChatScheme.js";

class ChatClient{
  createChat(req,res){
    let {admin,name, password} = req.body;
     Chat.create({admin:admin,name:name,password:password}).then((data)=>{res.status(200).json(data)}, (err)=>{res.status(500).json({statusCode:1, message:"Some error. Cannot create chat!"})})
  }
  addUsersToChat(){

  }
  joinChat(){

  }
  sendMember(){

  }
  getMessages(req,res){
       let id = req.query.id;
       Chat.findOne({_id:id}).then((data)=>{res.status(200).json(data)},(err)=>{res.status(500).send(err.message)})
  }
  testClient(req,res){
       res.status(200).json({message:"Router and client is Working", statusCode:200, status: "OK"});
  }
  async addMessage(req, res){
     let {name, message, user, id} = req.body;
     let chat = await Chat.findOne({_id:id});
     Chat.findOneAndUpdate({_id:id},{messages:chat.messages.concat([{massege:message,user:user}])}, {new:true}).then((data)=>{res.status(200).json(data)})
  }
  getAllChats(req,res){
    Chat.find().then((data)=>{res.status(200).json(data)}, (err)=>{res.status(500).json({statusCode:1,message:err.message})})
  }
}

export default new ChatClient();
