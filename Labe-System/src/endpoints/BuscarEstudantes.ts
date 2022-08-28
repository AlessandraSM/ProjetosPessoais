import { Request, Response } from "express"
import { StudentDatabase } from "../data/StudentDatabase"
import { Hobby } from '../model/Estudante'

type Resultado = {
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string,
    hobby: string[]
}

export default async function buscarEstudantes(req: Request, res: Response): Promise<void> {
    try {
        const nome = req.query.nome as string
        const turma = new StudentDatabase()
        if(!nome || !turma){
            throw new Error("Por gentileza verifique o preenchimento dos campos.") 
       }
        const result = await turma.pegarEstudantes(nome)
        const hobby = result.map((r) => {
            return r.hobby
        })
        const aluno: Resultado = {
            ...result[0],
            hobby: hobby
        } 
        res.status(201).send(aluno)
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}
