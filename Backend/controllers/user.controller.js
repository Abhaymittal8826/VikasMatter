import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import createTokenAndSaveCookie from "../jwt/generateToken.js";

const signup = async (req, res) => {
    const { fullname, email, password, confirmPassword } = req.body;

    try {
        console.log("Received signup data:", req.body);
        const user = await User.findOne({ email });
        if (user) {
            console.log("User already exists.");
            return res.status(400).json({ error: "User aaaaaalready exists" });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log("Hashed password:", hashedPassword);

        const newUser = new User({
            fullname,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        
        try {
            createTokenAndSaveCookie(newUser._id, res);
            res.status(201).json({ message: "User Create Successfully", newUser });
        } catch (tokenError) {
            console.error("Error generating token:", tokenError);
            res.status(500).json({ error: "Error generating token" });
        }
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ error: "An error occurred during signup" });
    }
};


const login = async(req,res) =>{
    const { email, password} = req.body;
    try {
        const user = await User.findOne({email});
       if(!user){
       return res.status(400).json({error:"User Not FOund"});
       }
    const isMatch = await bcrypt.compare(password, user.password);
      if(!isMatch){
        console.log("password do not mattch");
          return res.status(400).json({error: "Passwor do not  match"});
      }

      createTokenAndSaveCookie(user._id, res);
      console.log("hjbbhj");
      res.status(200).json({msg:"Login Succeesful",  user: { fullnam: user.fullname, email: user.email }});
                

    } catch (error) {
        console.log("Error Occur during Login",error);
        res.status(500).json({error:"Error Occured"});
    }
};
 const logout = async (req, res) => {
    try {
      res.clearCookie("jwt");
      res.status(201).json({ message: "User logged out successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  const userAll = async (req,res)=>{
      try {
        const loggedInUsers = req.user._id;
        const filterData = await User.find().select("-password");
        res.status(200).json({msg:"Get All Users successfully", data:filterData});
      }
       catch (error) {
           res.status(500).json({msg:"Errorrrrr" , error:error.message});
      }
  }
  

export {signup, login, logout,userAll};

