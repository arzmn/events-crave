import { apiError } from "../utils/apiError"
import { apiResponse } from "../utils/apiResponse"



export const getLoggedInUser=async(req,res)=>{
    try {
        return res.status(200).json(new apiResponse(200,user,"user fetched successfully"))
    } catch (error) {
        throw new apiError(500,"unable to fetch user details")
    }
}