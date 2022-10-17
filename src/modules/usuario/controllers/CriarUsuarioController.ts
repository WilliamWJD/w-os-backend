import { Request, Response } from "express";

import { UsuarioDto } from "../dtos/UsuarioDTO";
import { CriarUsuarioService } from "../services/CriarUsuarioService";

const criarUsuarioService = new CriarUsuarioService();

class CriarUsuarioController {
    async handle(req: Request, res: Response): Promise<Response> {
        const data: UsuarioDto = req.body;
        const usuario = await criarUsuarioService.execute(data);
        return res.status(201).json(usuario);
    }
}

export { CriarUsuarioController }