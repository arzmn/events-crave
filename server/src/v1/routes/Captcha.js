import { Router } from "express";
import { verifyRecaptcha } from "../controllers/CaptchV3Controller";

const router=Router();

router.route('/reverify',verifyRecaptcha)