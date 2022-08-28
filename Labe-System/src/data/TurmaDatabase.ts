import { BaseDatabase } from "./BaseDatabase";
import { Request, Response } from "express"
import { Turma } from "../model/Turma";

export class TurmaDatabase extends BaseDatabase {
    public async criarTurma(turma: Turma) {
        try {
            await BaseDatabase.connection('Turma')
                .insert({
                    id: turma.getId(),
                    nome: turma.getNome(),
                    modulo: turma.getModulo()
                })
        } catch (error: any) {
            throw new Error("Error inesperado")
        }
    }

    public async pegarTurmas() {
        try {
            const result = await BaseDatabase.connection("Turma").select("*")
            return result
        } catch (error: any) {
            throw new Error("Error inesperado")
        }
    }

    public async mudarModulo(modulo: string, id: string) {
        try {
            await BaseDatabase.connection('Turma')
            .update({
                modulo: modulo
            })
            .where("id", id)
        } catch (error: any) {
            throw new Error("Error inesperado")
        }
    }

    public async buscaEstudanteTurma(turma_id: string) {
        try {
            const result = await BaseDatabase.connection("Estudante")
                .select("*")
                .from("Estudante")
                .where("turma_id",turma_id)
            return result
        } catch (error: any) {
            console.log(error.sqlMessage || error.message)
            throw new Error("Error inesperado")
        }
    }
    public async buscaDocenteTurma(turma_id: string) {
        try {
            const result = await BaseDatabase.connection("Docente")
                .select("*")
                .from("Docente")
                .where("turma_id",turma_id)
            return result
        } catch (error: any) {
            console.log(error.sqlMessage || error.message)
            throw new Error("Error inesperado")
        }
    }
}