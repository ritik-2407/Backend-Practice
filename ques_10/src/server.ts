import express from "express";
import {Request, Response} from 'express';

import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = process.env.PORT;

console.log(PORT);

app.get('/' , (req : Request , res : Response) => {

    console.log("Hello World");
    res.send("ques 10 completed");
})

app.listen(PORT , () => {
    console.log('Server running on port 3010');
});