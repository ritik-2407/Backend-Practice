import { Request, Response } from "express";
import { createUser, getUser} from "../services/user.services";


export  const userInfo = (req: Request , res: Response) => {

    const {name, email} = req.body;

    const result = createUser({name , email});

    res.status(200).json(result);
    
}

export const searchUser = (req: Request , res: Response) => {

    const limit = Number(req.query.limit);
    const q = String(req.query.q);
    

    const result = getUser(q , limit);

    if(result === undefined){

        return res.status(404).send("user not found");
    }
    
   return res.status(200).json(result);
}

    
