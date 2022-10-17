import { Router } from 'express';
import { usuarioRouter } from './modules/usuario/routes/usuarioRoutes';

const routes = Router();

routes.use("/usuarios", usuarioRouter);

export { routes }