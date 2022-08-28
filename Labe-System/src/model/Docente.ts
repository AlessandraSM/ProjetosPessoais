import { Usuario } from './Usuario'

type Especialidade = {
    nome:"JS" | "CSS" | "React" | "Typescript" | "POO"
}

export class Docente extends Usuario {
    private especialidade:Especialidade[]

    constructor(
        id: string,
        name: string,
        email: string,
        data_nasc: string,
        turma_id: string,
        especialidade: Especialidade[]
    ) {
        super(id, name, email, data_nasc, turma_id)
        this.especialidade = especialidade
    }
    public getEspecialidade(): Especialidade[] {
        return this.especialidade
    }
}