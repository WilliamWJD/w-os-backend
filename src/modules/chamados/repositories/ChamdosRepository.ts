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

    async buscaChamadoPorId(chamado_id: string): Promise<ChamadoDTO | null> {
        return await prisma.chamado.findFirst({
            where: {
                id: chamado_id
            },
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
                tecnico_id: true,
                data_encerramento: true,
                created_at: true
            }
        })
    }
}

export { ChamadosRepository }