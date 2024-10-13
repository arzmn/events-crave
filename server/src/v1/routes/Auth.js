import {Router} from "express"
// import { verifyToken } from "../middlewares/authMiddlewares.js"
import { getLoggedInUser, loginUsingEmailAndPassword, signUpUsingEmailAndPassword } from "../controllers/userController.js"

const router=Router()


// router.route('/').get(verifyToken,getLoggedInUser)

router.route('/login').post(loginUsingEmailAndPassword)
router.route('/signup').post(signUpUsingEmailAndPassword)


export default router