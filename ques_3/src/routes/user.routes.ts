import { Router } from "express";
import {userInfo} from "../controllers/user.controller"

const router = Router();
router.post("/" , userInfo);

export default router;


