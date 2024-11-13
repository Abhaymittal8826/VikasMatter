import express from "express";
import { signup, login, logout, userAll } from '../controllers/user.controller.js';
import authenticateToken from '../middleware/authenticateToken.js';

const Router = express.Router(); 

Router.get("/signup", signup);
Router.post('/login', login);
Router.post('/logout', logout); 
Router.get('/userAll', authenticateToken, userAll);

export default Router;
