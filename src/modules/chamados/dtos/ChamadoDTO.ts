import { Assentamento } from "@prisma/client"
import { TecnicoDTO } from "../../tecnico/dtos/TecnicoDTO"
import { UsuarioDto } from "../../usuario/dtos/UsuarioDTO"

export interface ChamadoDTO {
    id: string
    descricao: string
    prioridade: string
    usuario: UsuarioDto
    solucao?: string
    tecnico?: TecnicoDTO
    created_at: Date
    data_encerramento?: Date
    Assentamento?: Assentamento[]
}