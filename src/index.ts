import express from 'express';
import {router} from './routes';

const server = express();

server.use(express.json());
server.use(router);

server.listen(3000, () => {
    console.log('Server is running on port 3000 http://localhost:3000/');
    });