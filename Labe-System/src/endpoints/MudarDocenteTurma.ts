import { Request, Response } from "express"
import { DocenteDatabase } from "../data/DocenteDatabase"

export default async function mudarDocenteTurma(req:Request, res:Response):Promise<void>{
    try {
        const { turma_id } = req.body
        if(! turma_id){
            throw new Error("Por gentileza verifique o preenchimento do campo.") 
       }
        const mudarDocente = new DocenteDatabase()
        await mudarDocente.mudarDocenteTurma(turma_id, req.params.id)
        res.status(201).send("Mudança realizada com sucesso!") 
        
    } catch (error:any) {
        res.status(500).send(error.message)
        
    }
}