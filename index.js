//const express = require('express');
import express from 'express';
const app = express();

import {animal} from './routes/apiAnimal.js';

const port = 4000;
app.use(express.json());

app.use('/api/animal', animal);

app.listen(port, ()=>{
  console.log(`Escuchando en el puerto ${port}.`);
});