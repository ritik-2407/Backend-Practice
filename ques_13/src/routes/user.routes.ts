import { Router } from "express";
import {userInfo} from "../controllers/user.controller"

const router = Router();
router.get('/' , userInfo)


export default router;


