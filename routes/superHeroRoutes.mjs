import express from 'express';

import { obtenerSuperheroePorIDController,obtenerTodosLosSuperheroesController,buscarSuperheroesPorAtributoController,obtenerMayoresDe30Controller } from '../controllers/superheroesController.mjs';

const router = express.Router ();

router.get('/heroes/mayores-30', obtenerMayoresDe30Controller);          // ordene primero la ruta específica para busquedas en postman
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController); // después la otra específica
router.get('/heroes/:id', obtenerSuperheroePorIDController);              // al final la de ID
router.get('/heroes', obtenerTodosLosSuperheroesController);              //  la más general

export default router;
