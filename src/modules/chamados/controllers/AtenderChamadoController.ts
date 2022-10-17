import { Request, Response } from "express";
import { AtenderChamadoService } from "../services/AtenderChamadoService";

const atenderChamadoService = new AtenderChamadoService();

class AtenderChamadoController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { tecnico_id, chamado_id } = req.body;
        await atenderChamadoService.execute({ tecnico_id, chamado_id });
        return res.status(201).send();
    }
}

export { AtenderChamadoController }