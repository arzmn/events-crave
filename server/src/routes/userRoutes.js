import {Router} from "express"
import { verifyToken } from "../middlewares/authMiddlewares"
import { getLoggedInUser } from "../controllers/userController"

const router=Router()


router.route('/').get(verifyToken,getLoggedInUser)