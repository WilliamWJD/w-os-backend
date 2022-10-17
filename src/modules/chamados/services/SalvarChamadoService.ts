import { Chamado } from "@prisma/client";
import { ChamadoDTO } from "../dtos/ChamadoDTO";
import { ChamadosRepository } from "../repositories/ChamdosRepository";

const chamadoRepository = new ChamadosRepository();

class SalvarChamadoService {
    async execute(data: Chamado): Promise<ChamadoDTO> {
        return await chamadoRepository.salvarChamado(data);
    }
}

export { SalvarChamadoService }