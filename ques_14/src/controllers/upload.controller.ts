import {  Request, Response } from "express";


export const uploadFile = (req: Request, res: Response): void => {

    if(!req.file) {
        res.status(400).json({
            error: "No file provided",
        })
        return;
    }

    res.status(200).json({
        message: "File uploaded successfully",
        filename: req.file.filename,
    })
};
