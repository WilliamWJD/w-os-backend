import { Router } from 'express';

import { SalvarChamadoController } from '../controllers/SalvarChamadoController';

const chamadoRoutes = Router();

const salvarChamadoController = new SalvarChamadoController();

chamadoRoutes.post('/', salvarChamadoController.handle);

export { chamadoRoutes }