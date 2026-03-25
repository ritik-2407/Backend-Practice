import { Router } from "express";
import {searchUser, userInfo} from "../controllers/user.controller"
import { routeLogger , errorMiddleware } from "../middlewares/user.middleware";

const router = Router();
router.post("/" ,    userInfo);
router.get('/' ,  searchUser)

export default router;


