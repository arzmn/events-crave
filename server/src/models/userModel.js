import mongoose ,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"


const userSchema=new Schema({
   
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        
    },
   
    avatar:{
        type:String,
        required:true,
    },

  
    password:{
        type:String,
      

    },
    googleId:{
        type:String
    }
  
},{
    timestamps:true
})

userSchema.pre("save",async function(next){
    if(!this.isModified("password") || !this.password) return next();

   
        this.password=await bcrypt.hash(this.password, 10)

    
    next()  
})

userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}

export const User=mongoose.model("User",userSchema)