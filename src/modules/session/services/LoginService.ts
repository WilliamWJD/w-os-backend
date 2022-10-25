import { sign } from 'jsonwebtoken';
import jwtConfig from '../../../config/JwtConfig';

import { BcryptHashProvider } from "../../../providers/BcryptHashProvider";
import { UsuarioRepository } from "../../usuario/repositories/UsuarioRepository";

interface LoginServiceResponse {
    usuario: {
        id: string;
        nome: string;
    },
    token: string;
}

interface LoginServiceData {
    email: string;
    senha: string;
}

const usuarioRepository = new UsuarioRepository();
const bcryptHashProvider = new BcryptHashProvider();

class LoginService {
    async execute({ email, senha }: LoginServiceData): Promise<LoginServiceResponse> {
        const usuario = await usuarioRepository.buscaUsuarioPorEmail(email);

        if (!usuario) {
            throw Error("Usuário ou senha inválido !")
        }

        if (!await bcryptHashProvider.compare(senha, usuario.senha || '')) {
            throw Error("Usuário ou senha inválido !")
        }

        const token = sign({ email }, jwtConfig.secret, {
            subject: usuario.id,
            expiresIn: jwtConfig.expiresIn
        })

        const data = {
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
            },
            token
        }

        return data;
    }
}

export { LoginService }