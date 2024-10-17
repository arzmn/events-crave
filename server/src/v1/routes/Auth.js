import {Router} from "express"
// import { verifyToken } from "../middlewares/authMiddlewares.js"
import { getLoggedInUser, loginUsingEmailAndPassword, logoutUser, signUpUsingEmailAndPassword } from "../controllers/userController.js"
import { verifyJWT } from "../middlewares/authMiddlewares.js"

const router=Router()


// router.route('/').get(verifyToken,getLoggedInUser)


router.route('/login').post(loginUsingEmailAndPassword)
router.route('/signup').post(signUpUsingEmailAndPassword)
router.route('/logout').get(verifyJWT,logoutUser)
router.route('/get-user').get(verifyJWT,getLoggedInUser)

export default router