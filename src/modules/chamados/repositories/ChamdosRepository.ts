import { Chamado } from "@prisma/client";
import { prisma } from "../../../database/prismaClient";
import { ChamadoDTO } from "../dtos/ChamadoDTO";

class ChamadosRepository {
    async salvarChamado(data: Chamado): Promise<ChamadoDTO> {
        return await prisma.chamado.create({
            data,
            select: {
                id: true,
                descricao: true,
                prioridade: true,
                usuario: {
                    select: {
                        id: true,
                        nome: true,
                        email: true
                    }
                },
                created_at: true
            }
        })
    }
}

export { ChamadosRepository }