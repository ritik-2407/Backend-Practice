import express from "express";
import {Request, Response} from 'express';

const app = express();

app.get('/home' , (req : Request , res : Response) => {

    console.log("Hello World");
    res.send("question 1 completed");
})

app.listen(3000 , () => {
    console.log('Server running on port 3000');
});