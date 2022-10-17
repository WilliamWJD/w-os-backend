import { Router } from 'express';
import { tecnicoRoutes } from './modules/tecnico/routes/usuarioRoutes';
import { usuarioRouter } from './modules/usuario/routes/usuarioRoutes';

const routes = Router();

routes.use("/usuarios", usuarioRouter);
routes.use("/tecnicos", tecnicoRoutes)

export { routes }