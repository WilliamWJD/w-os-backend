import { Usuario } from "@prisma/client";
import { BcryptHashProvider } from "../../../providers/BcryptHashProvider";
import { UsuarioDto } from "../dtos/UsuarioDTO";
import { UsuarioRepository } from "../repositories/UsuarioRepository";

const usuarioRepository = new UsuarioRepository();
const bcryptHashProvider = new BcryptHashProvider();

class CriarUsuarioService {
    async execute(data: Usuario): Promise<UsuarioDto> {
        if (await usuarioRepository.buscaUsuarioPorEmail(data.email)) {
            throw new Error("Usuário já cadastrado com esse e-mail")
        }

        data.senha = await bcryptHashProvider.hashGenerator(data.senha);

        return await usuarioRepository.salvarUsuario(data);
    }
}

export { CriarUsuarioService }