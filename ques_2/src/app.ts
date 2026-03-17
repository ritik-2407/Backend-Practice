import express from "express";
import userRoutes from './routes/user.routes'

const app = express();  //create app

app.use(express.json());    //define json parsing middleware;

app.use("/" , userRoutes);     //use routes as required

export default app; //export the app to be used in server file