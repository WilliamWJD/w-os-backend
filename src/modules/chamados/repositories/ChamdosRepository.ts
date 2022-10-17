import { Chamado } from "@prisma/client";
import { prisma } from "../../../database/prismaClient";

class ChamadosRepository {
    async salvarUsuario(data: Chamado) {
        return await prisma.chamado.create({
            data
        })
    }
}

export { ChamadosRepository }