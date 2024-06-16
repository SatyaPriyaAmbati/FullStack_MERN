import User from "../model/User.model.js"; // Correct import
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const existingUser = await User.findOne({ email }); // Check for existing user

    if (existingUser) {
      return res.status(400).json({ message: "User Already Exists" });
    }
    const hashPassword=await bcryptjs.hash(password,10);
    const newUser = new User({
      fullname:fullname,
      email:email,
      password:hashPassword
    });

    await newUser.save();
    res.status(201).json({ message: "User Created successfully" ,user:{
      _id:createdUser._id,
      fullname:createdUser.fullname,
      email:createdUser.email,

    },
  });
  } catch (error) {
    console.log("error: " + error.message);
    res.status(500).json({ message: "Server error" });
  }
};
export const login=async(req,res)=>{
  try{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    const isMatch=await bcryptjs.compare(password,user.password);
    if(!user ||  !isMatch)
    {
      return res.status(400).json({message:"Invalid username, password"});
    }
    else{
      res.status(200).json({message:"Login sucess",user:{
        _id:user.id,
        fullname:user.fullname,
        email:user.email
      }})
    }

  }catch(error){
      console.log("error",+error.message);
      res.status(500).json({message:"internal server error"});
  }
}
