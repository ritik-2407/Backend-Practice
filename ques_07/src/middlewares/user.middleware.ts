import { error } from "node:console";
import app from "../app";
import { Request, Response, NextFunction } from "express";

export const routeLogger = ( req: Request , res: Response , next: NextFunction) => {

        console.log(`${req.method} method on ${req.originalUrl}`);
        next();

}

export const errorMiddleware = (err: Error, req: Request , res: Response , next: NextFunction) => {

        res.status(res.statusCode).json({"error": err.message, "status" : res.statusCode});
        
}