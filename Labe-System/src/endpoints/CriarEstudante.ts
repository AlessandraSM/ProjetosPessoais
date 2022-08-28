import { Request, Response } from "express"
import { StudentDatabase } from "../data/StudentDatabase"
import { Estudante } from "../model/Estudante"

export default async function criarEstudante(req: Request, res: Response): Promise<void> {
    try {
        const { nome, email, data_nasc, turma_id, hobby } = req.body
        const id = Date.now().toString()
        if(!nome || ! email || !data_nasc || !turma_id || !hobby){
            throw new Error("Por gentileza verifique o preenchimento dos campos.") 
       }

        const estudante = new Estudante(id,nome, email, data_nasc, turma_id, hobby)

        const estudanteDB = new StudentDatabase()

        await estudanteDB.criarEstudante(estudante)

        res.status(201).send("Estudante criado com sucesso!")
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}