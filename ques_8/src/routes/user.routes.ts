import { Router } from "express";
import {searchUser, userInfo} from "../controllers/user.controller"
import { routeLogger , errorMiddleware, authMiddleware } from "../middlewares/user.middleware";

const router = Router();
router.get('/' , searchUser)
router.post("/" ,    userInfo);

export default router;


