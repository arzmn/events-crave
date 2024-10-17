import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"
import { apiError } from "../../utils/apiError.js"
import { apiResponse } from "../../utils/apiResponse.js"
import  auth from "../../firebase/firebaseConfigAuth.js"
import jwt from "jsonwebtoken"
import { encrypt } from "../../utils/Aes.js"

export const getLoggedInUser=async(req,res)=>{
    try {
        return res.status(200).json(new apiResponse(200,req.user,"user fetched successfully"))
    } catch (error) {
        throw new apiError(500,"unable to fetch user details")
    }
}



    export const signUpUsingEmailAndPassword=async(req,res)=>{
        try {

            const {email,password}=req.body;
            if(!email || !password){
                throw new apiError(404,"all fields are required");

            }
            const userCredential=await createUserWithEmailAndPassword(auth,email,password)  
            const id=encrypt(userCredential.user.uid) 
            const user={
                id:id,
                email:userCredential.user.email

            }
            const token=generateAccessToken(user)
            const option={
                httpOnly:true,
                secure:true
            }
        
            return res
            .cookie("jwt", token , option)
            .status(200).json(new apiResponse(200,user,"user registered successfully"))   
        } catch (error) {
            console.log(error)
            throw new apiError(404, "unable to create User")
        }
    }

export const loginUsingEmailAndPassword=async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
            throw new apiError(404,"all fields are required")
        }
        const userCredential=await signInWithEmailAndPassword(auth,email,password)
        
        const user={
            id:userCredential.user.uid,
            email:userCredential.user.email

        }
        const token=generateAccessToken(user)
        const option={
            httpOnly:true,
            secure:true
        }
        return res
        .cookie("jwt", token , option)
        .status(200).json(new apiResponse(200,user,"user registered successfully")) 
    } catch (error) {
        throw new apiError(500,"unable to login User")
    }
}


export const generateAccessToken=(user)=>{
    return jwt.sign(
        {
            user
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

export const logoutUser=async()=> {
    try {
      await firebase.auth().signOut();
      console.log("User logged out successfully.");
      const options={
        httpOnly:true,
        secure:true

      }
      return res.
      status(200)
      .clearCookie("jwt",options)
      .json(new apiResponse(200,{},"user logged out successfully"))
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  }
  