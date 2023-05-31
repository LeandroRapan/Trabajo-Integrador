import './db/database.js';
import express from 'express';
import morgan from 'morgan';
import { errorHandler } from './middlewares/errorHandler.js';
import productsRouter from './routes/products.router.js'
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';
import viewsRouter from './routes/views.router.js'
import { __dirname } from './path.js';

import { allMsgController,
    msgByIdController,
updateMsgController,
deleteOneController,
deleteAllController,
createMsgController
 } from './controllers/messages.controllers.js';


 const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(errorHandler);
app.use(morgan('el servidor escucha el puerto 8080'));
app.use(express.static(__dirname + '/public'))

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname+'/views');

app.use('/products', productsRouter)
app.use('/chat', viewsRouter);
const PORT =8080;
const portSocket = 8081;
console.log(__dirname)
 app.listen(PORT, ()=>console.log("conectado a puerto 8080"))



 const socketServer = new Server(portSocket);

socketServer.on('connection', async(socket)=>{
    console.log('¡🟢 New connection!', socket.id);

    socketServer.emit('messages', await allMsgController());

    socket.on('disconnect', ()=>{
        console.log('¡🔴 User disconnect!');
    });

    socket.on('newUser', (user)=>{
        console.log(`${user} is logged in`);
    });

    socket.on('chat:message', async(msg)=>{
        await createMsgController(msg);
        socketServer.emit('messages', await messagesManager.getAll());
    });

    socket.on('newUser', (user)=>{
        socket.broadcast.emit('newUser', user);
    });

    socket.on('chat:typing', (data)=>{
        socket.broadcast.emit('chat:typing', data);
    })
});