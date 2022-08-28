import { Request, Response } from "express"
import { StudentDatabase } from "../data/StudentDatabase"

export default async function buscarEstudanteSigno(req: Request, res: Response): Promise<void> {
    try {
        const signo = req.params.signo as string
        const turma = new StudentDatabase()
        const result = await turma.estudantePorSigno(signo)
        
        res.status(201).send(result)   
    } catch (error:any) {
        res.status(500).send(error.message)
    }
}