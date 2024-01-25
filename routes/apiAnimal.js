import express from "express";
const animal = express();

import { getAnimal, getIDAnimal, postAnimal, putAnimal, deleteAnimal } from "../controllers/animalController.js";

//Metodo para extraer datos a una base de Datos por medio de un api rest "GET"
animal.get('', getAnimal);

//Metodo para extraer datos por medio del ID a una base de Datos por medio de un api rest "GET"
animal.get('/:id', getIDAnimal);

//Metodo para agregar datos a una base de Datos por medio de un api rest "POST"
animal.post('', postAnimal);

//Metodo para modificar datos a una base de Datos por medio de un api rest "PUT"
animal.put('/:id', putAnimal);

//Metodo para borrar datos a una base de Datos por medio de un api rest "DELETE"
animal.delete('/:id', deleteAnimal);

export { animal };