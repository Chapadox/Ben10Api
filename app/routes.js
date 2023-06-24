import express from 'express';
import personangensById from './controller/personagens.js';
import fullPerson from './controller/fullPerson.js';

const app = express();

app.get('/', fullPerson);

app.get('/:id', personangensById);

export default app;

// by Destr00