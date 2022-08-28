import { Usuario } from './Usuario'

export type Hobby ={
    id?:string,
    nome: string
}

export class Estudante extends Usuario {
    private hobby: Hobby[]

    constructor(
        id: string,
        name: string,
        email: string,
        data_nasc: string,
        turma_id: string,
        hobby: Hobby[]
    ) {
        super(id, name, email, data_nasc, turma_id)
        this.hobby = hobby
    }
    public getHobby(): Hobby[] {
        return this.hobby
    }
}