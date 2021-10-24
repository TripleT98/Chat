import Users from "./../MongoSchemes/UserScheme.js";

class UserClient{
  async signUp(req,res){
    let {name, surname, login, password, eMail} = req.body;

    let loginSample = await Users.find({login:login});
    if(loginSample.length !== 0){res.status(200).json({message:"This login is not available", statusCode:2});return 2};
    let eMailSample = await Users.find({eMail:eMail})
    if(eMailSample.length !== 0){res.status(200).json({message:"This eMail is not available",statusCode:3});return 3};
    await Users.create({name, surname, login, password, eMail}).then(()=>{res.status(200).json({...req.body, message:`User ${name + " " + surname} has siggned up!`, statusCode:0})},()=>{res.status(200).json({message:"Something is wrong",statusCode:1})})
  }
  getUsers(req,res){
    Users.find().then((data)=>{res.status(200).json(data)},(err)=>{res.status(500).json(err.message)})
  }
  getUserById(req,res){
    Users.findById(req.query.id).then((data)=>{res.status(200).json(data)},(err)=>{res.status(500).json(err.message)})
  }
  getUserByAnyParams(req,res){
    Users.find(req.query).then((data)=>{res.status(200).json(data)},(err)=>{res.status(500).json(err.message)})
  }
  login(req,res){
    if(!req.query.password||!req.query.eMail){res.status(500).json({message:"Error: cannot login you without eMail or password!",statusCode:2});return true}
    Users.findOne({eMail:req.query.eMail,password:req.query.password}).then((data)=>{if(data==null){res.status(200).json({message:"Please enter valid eMail or password!", statusCode:1});return null};res.status(200).json({data,statusCode:0})},(err)=>{res.status(200).json({message:"Some error"})})
  }
  async joinChat(req,res){
    let chat_id = req.body.chatId;
    let user_id = req.body.userId
    let name = req.body.name;
    let user = await Users.findById(user_id);
    let chats = user.myChats;
    Users.findOneAndUpdate({_id:user_id}, {myChats:chats.concat({_id:chat_id, name:name})}, {new:true}).then((data)=>{res.status(500).json({chatId:chat_id, name:name})});
  }
}

export default new UserClient();
