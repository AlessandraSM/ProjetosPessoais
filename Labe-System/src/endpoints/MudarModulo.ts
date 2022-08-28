import { Request, Response } from "express"
import { TurmaDatabase } from "../data/TurmaDatabase"


export default async function mudarModulo(req: Request, res: Response): Promise<void> {
    try {
        const { modulo } = req.body
        if(! modulo){
            throw new Error("Por gentileza verifique o preenchimento do campo.") 
       }
        const atualizar = new TurmaDatabase()
        await atualizar.mudarModulo(modulo, req.params.id)
        res.status(201).send("Módulo atualizado com sucesso!")
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}