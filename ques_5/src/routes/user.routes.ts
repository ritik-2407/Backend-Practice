import { Router } from "express";
import {searchUser, userInfo} from "../controllers/user.controller"

const router = Router();
router.post("/" , userInfo);
router.get('/' , searchUser)

export default router;


