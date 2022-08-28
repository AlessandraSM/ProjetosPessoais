import { Request, Response } from "express"
import { TurmaDatabase } from "../data/TurmaDatabase"


export default async function buscarTurmas(req: Request, res: Response): Promise<void> {
    try {
        const turma = new TurmaDatabase()
        res.status(201).send(await turma.pegarTurmas())
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}