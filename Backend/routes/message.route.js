import express from "express";
import Message from "../models/message.model.js";
import Conversion from "../models/conversion.model.js";
import authenticateToken from "../middleware/authenticateToken.js";
import sendMessage from "../controllers/message.controller.js";
 const Router = express.Router();

 Router.post("/send/:id",authenticateToken,sendMessage);
//  Router.post("/conversion",Conversion);
 export default Router;