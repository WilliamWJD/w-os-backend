import { Router } from 'express';
import { AtenderChamadoController } from '../controllers/AtenderChamadoController';

import { SalvarChamadoController } from '../controllers/SalvarChamadoController';

const chamadoRoutes = Router();

const salvarChamadoController = new SalvarChamadoController();
const atenderChamadoController = new AtenderChamadoController();

chamadoRoutes.post('/', salvarChamadoController.handle);
chamadoRoutes.put('/atender_chamado', atenderChamadoController.handle);

export { chamadoRoutes }