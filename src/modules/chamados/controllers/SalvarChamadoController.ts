import { Chamado } from "@prisma/client";
import { Request, Response } from "express";
import { SalvarChamadoService } from "../services/SalvarChamadoService";

const salvarChamadoService = new SalvarChamadoService();

class SalvarChamadoController {
    async handle(req: Request, res: Response): Promise<Response> {
        const data: Chamado = req.body;
        const chamado = await salvarChamadoService.execute(data);
        return res.status(201).json(chamado);
    }
}

export { SalvarChamadoController }