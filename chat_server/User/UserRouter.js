import Router from "express";
import UserClient from "./UserClient.js";

let router = new Router();

router.post("/signup", UserClient.signUp);
router.get("/getusers",UserClient.getUsers);
router.get("/getuser", UserClient.getUserById);
router.get("/getbyemail",UserClient.getUserByAnyParams);
router.get("/login", UserClient.login);
router.patch("/joinChat", UserClient.joinChat);

export default router;
