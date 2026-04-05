import express from 'express';
import uploadRoutes from "./routes/upload.routes"


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/upload' , uploadRoutes);


export default app;