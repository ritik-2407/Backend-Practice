import { NextFunction, Request, Response } from "express";
import {getUsers} from "../services/user.services";


export const  userInfo  = async (req: Request , res: Response) => {

        try{

            const result = await getUsers();
            res.status(200).json(result);
        }
        catch (error) {
        return res.status(500).json({
            error: "Failed to fetch users from database"
        });
    
}
}
