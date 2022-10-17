import { Usuario } from "@prisma/client";
import { prisma } from "../../../database/prismaClient";
import { UsuarioDto } from "../dtos/UsuarioDTO";

class UsuarioRepository {
    async salvarUsuario(data: Usuario): Promise<UsuarioDto> {
        return await prisma.usuario.create({
            data,
            select: {
                id: true,
                nome: true,
                email: true
            }
        });
    }

    async buscaUsuarioPorEmail(email: string) {
        return await prisma.usuario.findUnique({
            where: {
                email
            }
        })
    }
}

export { UsuarioRepository }