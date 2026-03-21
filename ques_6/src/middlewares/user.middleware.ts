import app from "../app";
import { Request, Response, NextFunction } from "express";

export const routeLogger = (req: Request , res: Response , next: NextFunction) => {

        console.log(`${req.method} method on ${req.originalUrl}`);
        next();

}