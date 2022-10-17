import { Router } from 'express';
import { CriarUsuarioController } from '../controllers/CriarUsuarioController';

const usuarioRouter = Router();

const criarUsuarioController = new CriarUsuarioController();

usuarioRouter.post('/', criarUsuarioController.handle);

export { usuarioRouter }