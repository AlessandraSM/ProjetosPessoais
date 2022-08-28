import { Request, Response } from "express"
import { TurmaDatabase } from "../data/TurmaDatabase"
import { Turma } from "../model/Turma"

export default async function criarTurma(req: Request, res: Response): Promise<void> {
    try {
       
        const { nome, modulo } = req.body
        const id = Date.now().toString()
        if(!nome || ! modulo){
            throw new Error("Por gentileza verifique o preenchimento dos campos.") 
       }

        const turma = new Turma(id, nome, modulo)

        const turmaDB = new TurmaDatabase()

        await turmaDB.criarTurma(turma)

        res.status(201).send("Turma criada com sucesso!")
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}