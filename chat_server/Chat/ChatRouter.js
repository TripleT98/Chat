import Router from "express";
import ChatClient from "./ChatClient.js";

let router = Router();

router.post("/createChat", ChatClient.createChat);
router.get("/testingRouter", ChatClient.testClient);
router.patch("/addMessage", ChatClient.addMessage);
router.get("/getChats", ChatClient.getAllChats);
router.get("/getMessages", ChatClient.getMessages);

export default router;
