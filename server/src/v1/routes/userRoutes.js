import {Router} from "express"
import { verifyToken } from "../middlewares/authMiddlewares"
import { getLoggedInUser, loginUsingEmailAndPassword, signUpUsingEmailAndPassword } from "../controllers/userController"

const router=Router()


router.route('/').get(verifyToken,getLoggedInUser)

router.route('/login').post(loginUsingEmailAndPassword)
router.route('/signup').post(signUpUsingEmailAndPassword)


export default router