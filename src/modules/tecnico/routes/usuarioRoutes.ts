import { Router } from 'express';
import { CriarTecnicoController } from '../controllers/CriarTecnicoController';

const tecnicoRoutes = Router();

const criarTecnicoController = new CriarTecnicoController();

tecnicoRoutes.post('/', criarTecnicoController.handle);

export { tecnicoRoutes }