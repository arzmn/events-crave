import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"
import { apiError } from "../../utils/apiError"
import { apiResponse } from "../../utils/apiResponse"
import { auth } from "../../firebase/firebaseConfigAuth"


export const getLoggedInUser=async(req,res)=>{
    try {
        return res.status(200).json(new apiResponse(200,user,"user fetched successfully"))
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
            return res.status(200).json(new apiResponse(200,userCredential ,"user registered successfully"))   
        } catch (error) {
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
        
        const options={
            httpOnly:true,
            secure:true
        }
        return res
        .status(200)
        .cookie("accessToken",userCredential._tokenResponse.idToken,options)
        .cookie("refreshToken",userCredential._tokenResponse.refreshToken,options)
        .json(new apiResponse(200,userCredential,"user created successfully"));
    } catch (error) {
        throw new apiError(500,"unable to login User")
    }
}


