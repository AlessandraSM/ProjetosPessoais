import { BaseDatabase } from "./BaseDatabase";
import { Request, Response } from "express"
import { Docente } from "../model/Docente";

const convertDate = (date: string): string => {
    const arrDate = date.split("/")
    return `${arrDate[2]}-${arrDate[1]}-${arrDate[0]}`
}

export class DocenteDatabase extends BaseDatabase {
    public async criarDocente(docente: Docente) {
        try {
            const especialidades = docente.getEspecialidade()

            const especialidadeId = (): string => {
                return Date.now().toString()
            }

            const docenteEspecialidadeId = (): string => {
                return Date.now().toString()
            }

            await BaseDatabase.connection('Docente')
                .insert({
                    id: docente.getId(),
                    nome: docente.getNome(),
                    email: docente.getEmail(),
                    data_nasc: convertDate(docente.getDataNasc()),
                    turma_id: docente.getTurmaId()
                })

            for (let especialidade of especialidades) {
                const id = especialidadeId()

                await BaseDatabase.connection('Especialidade')
                    .insert({
                        id: id,
                        nome: especialidade.nome
                    })

                await DocenteDatabase.connection('Docente_especialidade')
                    .insert({
                        id: docenteEspecialidadeId(),
                        docente_id: docente.getId(),
                        especialidade_id: id
                    })
            }
        } catch (error: any) {
            console.log(error.sqlMessage)
            throw new Error("Error inesperado")
        }
    }

    public async pegarDocentes() {
        try {
            const result = await BaseDatabase.connection("Docente")
                .select("Docente.nome as nomeDoDocente", "Docente.email", "Docente.data_nasc", "Docente.turma_id", "Especialidade.nome as EspecialidadeNome")
                .from("Docente_especialidade")
                .join("Docente", "Docente.id", "Docente_especialidade.docente_id")
                .join("Especialidade", "Especialidade.id", "Docente_especialidade.especialidade_id")
            return result
        } catch (error: any) {
            throw new Error("Error inesperado")
        }
    }

    public async mudarDocenteTurma(turma_id: string, id: string) {
        try {
            await BaseDatabase.connection('Docente')
                .update({
                    turma_id: turma_id
                })
                .where("id", id)
        } catch (error: any) {
            console.log(error.sqlMessage)
            throw new Error("Error inesperado")
        }
    }
    public async buscarDocentePorEspecialidade(especialidade: string) {
        try {
            const result = await BaseDatabase.connection("Docente")
                .select("Docente.nome as nomeDoDocente", "Docente.email", "Docente.data_nasc", "Docente.turma_id", "Especialidade.nome as especialidade")
                .from("Docente_especialidade")
                .join("Docente", "Docente.id", "Docente_especialidade.docente_id")
                .join("Especialidade", "Especialidade.id", "Docente_especialidade.especialidade_id")
                .where("Especialidade.nome", "LIKE", especialidade)
            return result
        } catch (error: any) {
        }
    }
}