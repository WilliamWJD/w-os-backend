import { ChamadosRepository } from "../repositories/ChamdosRepository";

const chamadosRepository = new ChamadosRepository();

interface IAtenderChamadoService {
    usuario_id: string;
    chamado_id: string;
}

class AtenderChamadoService {
    async execute({ usuario_id, chamado_id }: IAtenderChamadoService): Promise<void> {
        // verifica se o tecnico existe

        // verifica se o chamado esta aberto
        const chamado = await chamadosRepository.buscaChamadoPorId(usuario_id);

        if (chamado !== null && chamado.data_encerramento !== null) {
            throw new Error("Esse chamado ja foi encerrado");
        }

        if (chamado !== null && chamado.tecnico_id !== null) {
            throw new Error("Esse chamado ja está em atendimento")
        }

        // await chamadosRepository.atendeChamado(tecnico_id, chamado_id);
    }
}

export { AtenderChamadoService }