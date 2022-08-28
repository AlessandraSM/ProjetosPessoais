import { Request, Response } from "express"
import { StudentDatabase } from "../data/StudentDatabase"

export default async function buscarEstudantes(req: Request, res: Response): Promise<void> {
    try {
        const hobby = req.query.hobby as string
        const turma = new StudentDatabase()
        if(!hobby || ! turma){
            throw new Error("Por gentileza verifique o preenchimento dos campos.") 
       }
        const result = await turma.estudantesMesmoHobby(hobby) 
        res.status(201).send(result)   
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}