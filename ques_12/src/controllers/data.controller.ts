import { validData } from "../services/data.services";
import { Request, Response } from "express";

export const isValid = (req: Request , res: Response) => {

    const data = req.body;

    const result = validData(data);

    if (!result?.success) {
    return res.status(400).json(result);
  }

  return res.status(200).json(result);
    
}