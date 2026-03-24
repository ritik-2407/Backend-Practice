
import { Request, Response, NextFunction } from "express";


//This one will work for browsers as they will handle the rest
export const corsConfigBrowser = (req:Request , res:Response , next:NextFunction) => {

        const accessHeader = req.get("Origin");

        if( accessHeader === "http://localhost:3009"){

                 res.header("Access-Control-Allow-Origin" , "http://localhost:3009");
        }

        next();
}

//This is for postman as postman does not care about origin , so in order to know if the middleware is working I have implemented manual checks
export const corsConfigPostman = (req:Request , res:Response , next:NextFunction) => {

        const accessHeader = req.get("Origin");

        if( accessHeader != "http://localhost:3009"){

                return res.status(403).json({error: "No cross origin request allowed"});
        }

        next();
}