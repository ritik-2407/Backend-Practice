import { Router } from "express";
import {searchUser, userInfo} from "../controllers/user.controller"
import { routeLogger } from "../middlewares/user.middleware";

const router = Router();
router.post("/" , routeLogger,  userInfo);
router.get('/' , routeLogger,  searchUser)

export default router;


