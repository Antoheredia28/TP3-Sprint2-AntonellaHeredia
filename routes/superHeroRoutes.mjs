import express from 'express';
import {
  obtenerSuperheroePorIDController,
  obtenerTodosLosSuperheroesController,
  buscarSuperheroesPorAtributoController,
  obtenerMayoresDe30ConFiltrosController,
} from '../controllers/superheroesController.mjs';

const router = express.Router();

// Ruta específica: mayores de 30
router.get('/heroes/mayores-30', (req, res, next) => {
  console.log(' Ruta activada: /heroes/mayores-30');
  next(); // continúa al controlador
}, obtenerMayoresDe30ConFiltrosController);

// Ruta específica: búsqueda por atributo
router.get('/heroes/buscar/:atributo/:valor', (req, res, next) => {
  console.log(`Ruta activada: /heroes/buscar/${req.params.atributo}/${req.params.valor}`);
  next();
}, buscarSuperheroesPorAtributoController);

// Ruta por ID
router.get('/heroes/:id', (req, res, next) => {
  console.log(`Ruta activada: /heroes/${req.params.id}`);
  next();
}, obtenerSuperheroePorIDController);

// Ruta general
router.get('/heroes', (req, res, next) => {
  console.log('Ruta activada: /heroes (todos los superhéroes)');
  next();
}, obtenerTodosLosSuperheroesController);

export default router;
