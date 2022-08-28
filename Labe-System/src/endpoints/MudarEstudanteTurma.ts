import { Request, Response } from "express"
import { StudentDatabase } from "../data/StudentDatabase"


export default async function mudarEstudanteTurma(req: Request, res: Response): Promise<void> {
    try {
        const { turma_id } = req.body
        if(!turma_id ){
            throw new Error("Por gentileza, verifique o preenchimento do campo.") 
       }

       if(!req.params.id){
            throw new Error("Esta faltando Id do estudante.")
       }
        const atualizar = new StudentDatabase()
        await atualizar.mudarEstudanteTurma(turma_id, req.params.id)
        res.status(201).send("Mudança de turma realizada com sucesso!")
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}