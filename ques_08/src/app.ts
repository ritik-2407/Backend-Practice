import express from 'express';
import userRoutes from './routes/user.routes'
import {authMiddleware} from './middlewares/user.middleware';

const app = express();


app.use(express.json());
app.use(authMiddleware);

app.use('/api/users' , userRoutes);


export default app;