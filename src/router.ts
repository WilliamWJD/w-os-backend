import { Router } from 'express';
import { chamadoRoutes } from './modules/chamados/routes/chamadoRoutes,';
import { loginRoutes } from './modules/session/routes/LoginRoutes';
import { usuarioRouter } from './modules/usuario/routes/usuarioRoutes';

const routes = Router();

routes.use("/usuarios", usuarioRouter);
routes.use("/chamados", chamadoRoutes);
routes.use("/login", loginRoutes);

export { routes }