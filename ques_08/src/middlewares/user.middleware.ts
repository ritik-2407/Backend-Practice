import { error } from "node:console";
import app from "../app";
import { Request, Response, NextFunction } from "express";

export const authMiddleware = (req: Request , res: Response , next: NextFunction) => {

        const authHeader = req.get("Authorization");

        if(!authHeader){
               return res.status(401).json({error: "Auth required"});
        }

        next();
}