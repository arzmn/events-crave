// getList InfoDetails
import { Router } from "express";
import { verifyJWT } from "../middlewares/authMiddlewares";

const router=Router()

router.use('/events',verifyJWT)