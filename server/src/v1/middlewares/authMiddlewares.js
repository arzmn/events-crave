import {auth} from "../../firebase/firebaseConfig.js";
import admin from "../../firebase/firebaseConfigAdmin.js";
import { apiError } from "../../utils/apiError.js";







export const verifyToken = async (req, res, next) => {
    const idToken = req.cookies.accessToken || req.headers.authorization?.split('Bearer ')[1]; // Extract token from Authorization header
  
    if (!idToken) {
      return res.status(401).send('Unauthorized');
    }
  
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req.user = decodedToken; // Add user info to request object
      next();
    } catch (error) {
      return res.status(403).send('Invalid token');
    }
  };

  export const verifyJWT=async(req,res,next)=>{
    const token=req.cookies.jwt;
    if(!token){
        throw new apiError(401,"unauthorised ")
    }
    try{
        const decodedToken=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        if(!decodedToken){
            throw new apiError(401,"unauthorised")
        }
        req.user=decodedToken;
        next()

    }
    catch(error){
        throw new apiError(500, "unable to veify token")
    }
  }
  