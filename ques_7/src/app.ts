import express from 'express';
import userRoutes from './routes/user.routes'
import { errorMiddleware, routeLogger } from './middlewares/user.middleware';

const app = express();


app.use(express.json());
app.use(routeLogger);

app.use('/api/users' , userRoutes);
app.use(errorMiddleware);

export default app;