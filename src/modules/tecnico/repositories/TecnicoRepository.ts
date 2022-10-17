import { prisma } from "../../../database/prismaClient";
import { TecnicoDTO } from "../dtos/TecnicoDTO";

class TecnicoRepository {
    async salvarTecnico(data: TecnicoDTO) {
        return await prisma.tecnico.create({
            data
        });
    }

    async buscarTecnicoPorEmail(email: string) {
        return await prisma.tecnico.findUnique({
            where: {
                email
            }
        })
    }
}

export { TecnicoRepository }