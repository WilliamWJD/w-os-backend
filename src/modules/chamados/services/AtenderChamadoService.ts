import { UsuarioRepository } from "../../usuario/repositories/UsuarioRepository";
import { ChamadosRepository } from "../repositories/ChamdosRepository";

const chamadosRepository = new ChamadosRepository();
const usuarioRepository = new UsuarioRepository();

interface IAtenderChamadoService {
    usuario_id: string;
    chamado_id: string;
}

class AtenderChamadoService {
    async execute({ usuario_id, chamado_id }: IAtenderChamadoService): Promise<void> {
        // verifica se o usuario da requisição tem perfil TECNICO
        const usuario = await usuarioRepository.buscarUsuarioPorId(usuario_id);

        if (usuario?.perfil !== 'TECNICO') {
            throw new Error("Somente usuário com perfil TECNICO pode atender um chamado.");
        }

        // verifica se o chamado esta aberto
        const chamado = await chamadosRepository.buscaChamadoPorId(chamado_id);

        if (chamado !== null && chamado.data_encerramento !== null) {
            throw new Error("Esse chamado ja foi encerrado");
        }

        if (chamado !== null && chamado.tecnico_id !== null) {
            throw new Error("Esse chamado ja está em atendimento")
        }

        await chamadosRepository.atendeChamado(usuario_id, chamado_id);
    }
}

export { AtenderChamadoService }