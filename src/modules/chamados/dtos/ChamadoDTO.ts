import { Assentamento } from "@prisma/client"
import { TecnicoDTO } from "../../tecnico/dtos/TecnicoDTO"
import { UsuarioDto } from "../../usuario/dtos/UsuarioDTO"

export interface ChamadoDTO {
    id: string;
    descricao: string;
    prioridade: string;
    usuario: UsuarioDto;
    solucao?: string;
    tecnico?: TecnicoDTO;
    tecnico_id?: string | null;
    created_at: Date;
    data_encerramento?: Date | null;
    Assentamento?: Assentamento[];
}