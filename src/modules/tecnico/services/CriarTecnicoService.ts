import { Tecnico } from "@prisma/client";
import { BcryptHashProvider } from "../../../providers/BcryptHashProvider";
import { TecnicoDTO } from "../dtos/TecnicoDTO";
import { TecnicoRepository } from "../repositories/TecnicoRepository";

const tecnicoRepository = new TecnicoRepository();
const bcryptHashProvider = new BcryptHashProvider();

class CriarTecnicoService {
    async execute(data: Tecnico): Promise<TecnicoDTO> {
        if (await tecnicoRepository.buscarTecnicoPorEmail(data.email)) {
            throw new Error("Técnico já cadastrado com esse e-mail")
        }

        data.senha = await bcryptHashProvider.hashGenerator(data.senha);

        return await tecnicoRepository.salvarTecnico(data);
    }
}

export { CriarTecnicoService }