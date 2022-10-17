import { prisma } from "../../../database/prismaClient";
import { UsuarioDto } from "../dtos/UsuarioDTO";

class UsuarioRepository {
    async salvarUsuario(data: UsuarioDto) {
        return await prisma.usuario.create({
            data
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