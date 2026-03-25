import { Router } from "express";
import {getInfo} from "../controllers/user.controller";

const router = Router();    //initialize the router

router.get("/info" , getInfo);  //define the end point and use the function from controller layer to perform operation on that route

export default router; //export the router