import { apiError } from "../../utils/apiError";
import { apiResponse } from "../../utils/apiResponse";



export const verifyRecaptcha = async (req,res) => {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const {token}=req.body;
  try {
    
      // POST request to Google's reCAPTCHA verification API
      const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: token,
        }),
      });
      return res.status(200).json(new apiResponse(200,response,"captcha verified successfully"))
  } catch (error) {
    throw new apiError("500","unable to verify captcha")
  }
  
    
  };

