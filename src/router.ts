import { Router } from 'express';
import { chamadoRoutes } from './modules/chamados/routes/chamadoRoutes,';
import { usuarioRouter } from './modules/usuario/routes/usuarioRoutes';

const routes = Router();

routes.use("/usuarios", usuarioRouter);
routes.use("/chamados", chamadoRoutes);

export { routes }