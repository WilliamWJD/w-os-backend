import { Request, Response } from "express";

import { TecnicoDTO } from "../dtos/TecnicoDTO";
import { CriarTecnicoService } from "../services/CriarTecnicoService";

const criarTecnicoService = new CriarTecnicoService();

class CriarTecnicoController {
    async handle(req: Request, res: Response): Promise<Response> {
        const data: TecnicoDTO = req.body;
        const tecnico = await criarTecnicoService.execute(data);
        return res.status(201).json(tecnico);
    }
}

export { CriarTecnicoController }