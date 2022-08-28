import { Request, Response } from "express"
import { TurmaDatabase } from "../data/TurmaDatabase"


export default async function buscaEstudanteDocente(req: Request, res: Response): Promise<void> {
    try {
        const turmaEsDo = req.params.turma_id
        const estudanteDocente = new TurmaDatabase()
        if(!turmaEsDo){
            throw new Error("Verifique o id da turma.")
        }
        const result = await estudanteDocente.buscaEstudanteTurma(turmaEsDo) 
        const result2 = await estudanteDocente.buscaDocenteTurma(turmaEsDo)

        let result3:any = []
        for(let i =0; i<result2.length;i++){
            result3 = [...result,result2[i]]
        }
        res.status(201).send(result3)   
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}