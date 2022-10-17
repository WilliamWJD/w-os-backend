import { Router } from 'express';
import { chamadoRoutes } from './modules/chamados/routes/chamadoRoutes,';
import { tecnicoRoutes } from './modules/tecnico/routes/usuarioRoutes';
import { usuarioRouter } from './modules/usuario/routes/usuarioRoutes';

const routes = Router();

routes.use("/usuarios", usuarioRouter);
routes.use("/tecnicos", tecnicoRoutes);
routes.use("/chamados", chamadoRoutes);

export { routes }