import express from 'express';
import userRoutes from './routes/product.routes'


const app = express();


app.use(express.json());


app.use('/api/products' , userRoutes);


export default app;