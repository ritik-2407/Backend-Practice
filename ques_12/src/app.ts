import express from 'express';
import dataRoutes from './routes/data.routes'


 const app = express();

app.use(express.json());

app.use('/api/register' , dataRoutes);

export default app;