import { TecnicoRepository } from "../../tecnico/repositories/TecnicoRepository";
import { ChamadosRepository } from "../repositories/ChamdosRepository";

const tecnicoRepository = new TecnicoRepository();
const chamadosRepository = new ChamadosRepository();

interface IAtenderChamadoService {
    tecnico_id: string;
    chamado_id: string;
}

class AtenderChamadoService {
    async execute({ tecnico_id, chamado_id }: IAtenderChamadoService): Promise<void> {
        // verifica se o tecnico existe
        if (!await tecnicoRepository.buscarTecnicoPorId(tecnico_id)) {
            throw new Error("Técnico não encontrado")
        }

        // verifica se o chamado esta aberto
        const chamado = await chamadosRepository.buscaChamadoPorId(chamado_id);

        if (chamado?.data_encerramento !== null) {
            throw new Error("Esse chamado já foi encerrado")
        }

        chamado.tecnico_id = tecnico_id;

        console.log(chamado);
    }
}

export { AtenderChamadoService }