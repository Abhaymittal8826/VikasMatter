import mongoose from "mongoose";
import Message from "./message.model.js";
import User from "./user.model.js";
const conversionSchema = new mongoose.Schema(
 {
    members:[
     {
        type: mongoose.Schema.Types.ObjectId,
     ref:"User",
     },
    ],
    messages:[
     {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Message", 
        default:[],
     },
    ],

 }
 ,{timestamps:true}
)
   
 const Conversion = mongoose.model("Conversion",conversionSchema);
 export default Conversion;