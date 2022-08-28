import { Request, Response } from "express"
import { DocenteDatabase } from "../data/DocenteDatabase"

export default async function buscarDocentes(req: Request, res: Response): Promise<void> {
    try {
        const docente = new DocenteDatabase()
        const result = await docente.pegarDocentes()
        res.status(201).send(result)
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}