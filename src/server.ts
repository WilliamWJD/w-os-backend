import express from 'express';
import * as dotenv from 'dotenv';
import "express-async-errors";

import { Exception } from './errors/Exception';

import { routes } from './router';

const app = express();
dotenv.config();

app.use(express.json());
app.use(routes);
app.use(Exception);

app.listen(3333, () => {
    console.log('Servidor online');
})