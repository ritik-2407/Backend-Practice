import { Request, Response } from "express";
import { createUser } from "../services/user.services";

export  const userInfo = (req: Request , res: Response) => {

    const {name, email} = req.body;

    const result = createUser({name , email});

    res.status(200).json(result);
    
}