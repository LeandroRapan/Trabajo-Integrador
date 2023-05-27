import './db/database.js';
import express from 'express';
import morgan from 'morgan';
import { errorHandler } from './middlewares/errorHandler.js';
import productsRouter from './routes/products.router.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(errorHandler);
app.use(morgan('el servidor escucha el puerto 8080'));

app.use('/products', productsRouter)

const PORT =8080;
 app.listen(PORT, ()=>console.log("conectado a puerto 8080"))