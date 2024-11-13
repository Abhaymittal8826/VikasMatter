import Conversion from "../models/conversion.model.js";
import Message from "../models/message.model.js";
import { userAll } from "./user.controller.js";

const sendMessage = async (req, res) => {
    
    try {

          const {message} = req.body;
          const {id: receiverId} = req.params;
          const senderId = req.user._id;
          console.log("sender",senderId);
          console.log("receiver",receiverId);
          let conversion = await Conversion.findOne({
            members : {$all: senderId,receiverId}
          });
          if(!conversion){
               conversion = await Conversion.create({
                members: [senderId,receiverId],
               });
          }
               senderId = senderId.toString();
         const newMessage = new Message({
            senderId,
            receiverId,
            message 
         })
         if(newMessage){
            conversion.messages.push(newMessage._id);
         }
        await Promise.all([conversion.save(),newMessage.save()]);
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({error:" Error Occutred" });
    }
};  

export default sendMessage;
