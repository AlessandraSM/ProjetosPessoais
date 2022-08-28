import { Request, Response } from "express"
import { DocenteDatabase } from "../data/DocenteDatabase"

type Resultado = {
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string,
    hobby: string[]
}

export default async function buscarDocenteEspecialidade(req: Request, res: Response): Promise<void> {
    try {
        const especialidade = req.query.especialidade as string
        const docente = new DocenteDatabase()
        if(! especialidade|| ! docente){
            throw new Error("Por gentileza verifique o preenchimento dos campos.") 
       }
        const result = await docente.buscarDocentePorEspecialidade(especialidade)
        // const espec = result.map((e)=>{
        //     return e.especialidade
        // })
        // let doc:Resultado
       
        res.status(201).send(result)   
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}