import {Request , Response} from 'express';
import {getUserInfo} from '../services/user.service' 

export const getInfo = (req: Request , res: Response): void => {

    const data = getUserInfo();
    res.status(200).json(data);
};