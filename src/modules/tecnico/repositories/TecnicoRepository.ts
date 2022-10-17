import { Tecnico } from "@prisma/client";
import { prisma } from "../../../database/prismaClient";
import { TecnicoDTO } from "../dtos/TecnicoDTO";

class TecnicoRepository {
    async salvarTecnico(data: Tecnico): Promise<TecnicoDTO> {
        return await prisma.tecnico.create({
            data,
            select: {
                id: true,
                nome: true,
                email: true
            }
        });
    }

    async buscarTecnicoPorEmail(email: string) {
        return await prisma.tecnico.findUnique({
            where: {
                email
            }
        })
    }

    async buscarTecnicoPorId(id: string): Promise<TecnicoDTO | null> {
        return await prisma.tecnico.findFirst({
            where: {
                id
            },
            select: {
                id: true,
                nome: true,
                email: true
            }
        })
    }
}

export { TecnicoRepository }