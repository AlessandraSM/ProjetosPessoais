import { BaseDatabase } from "./BaseDatabase";
import { Request, Response } from "express"
import { Estudante, Hobby } from "../model/Estudante";


const convertDate = (date: string): string => {
    const arrDate = date.split("/")
    return `${arrDate[2]}-${arrDate[1]}-${arrDate[0]}`
}
// const getDayMonth = (date:string): string =>{

// }

export class StudentDatabase extends BaseDatabase {
    public async criarEstudante(estudante: Estudante) {
        try {
            const hobbies = estudante.getHobby()

            const hobbyId = (): string => {
                return Date.now().toString()
            }

            const estudanteHobbyId = (): string => {
                return Date.now().toString()
            }

            await BaseDatabase.connection('Estudante')
                .insert({
                    id: estudante.getId(),
                    nome: estudante.getNome(),
                    email: estudante.getEmail(),
                    data_nasc: convertDate(estudante.getDataNasc()),
                    turma_id: estudante.getTurmaId()
                })

            for (let hobby of hobbies) {
                const id = hobbyId()

                await BaseDatabase.connection('Hobby')
                    .insert({
                        id: id,
                        nome: hobby.nome
                    })

                await StudentDatabase.connection('Estudante_hobby')
                    .insert({
                        id: estudanteHobbyId(),
                        estudante_id: estudante.getId(),
                        hobby_id: id
                    })
            }
        } catch (error: any) {
            throw new Error("Error inesperado")
        }
    }

    public async pegarEstudantes(nome: string) {
        try {
            const result = await BaseDatabase.connection("Estudante")
                .select("Estudante.nome as nomeDoEstudante", "Estudante.email", "Estudante.data_nasc", "Estudante.turma_id", "Hobby.nome as hobby")
                .from("Estudante_hobby")
                .join("Estudante", "Estudante.id", "Estudante_hobby.estudante_id")
                .join("Hobby", "Hobby.id", "Estudante_hobby.hobby_id")
                .where("Estudante.nome", "LIKE", nome)
            return result
        } catch (error: any) {
            throw new Error("Error inesperado")
        }
    }

    public async mudarEstudanteTurma(turma_id: string, id: string) {
        try {
            await BaseDatabase.connection('Estudante')
                .update({
                    turma_id: turma_id
                })
                .where("id", id)
        } catch (error: any) {
            throw new Error("Error inesperado")
        }
    }

    public async estudantesMesmoHobby(hobby: string) {
        try {
            const result = await BaseDatabase.connection("Estudante")
                .select("Estudante.nome as nomeDoEstudante", "Estudante.email", "Estudante.data_nasc", "Estudante.turma_id", "Hobby.nome as HobbyNome")
                .from("Estudante_hobby")
                .join("Estudante", "Estudante.id", "Estudante_hobby.estudante_id")
                .join("Hobby", "Hobby.id", "Estudante_hobby.hobby_id")
                .where("Hobby.nome", "LIKE", hobby)
            return result
        } catch (error: any) {
            throw new Error("Error inesperado")
        }
    }

    public async estudantePorSigno(signo: string) {
        try {
            
            const signos = [{
                nome: "Áries",
                dataInicio: "21-03",
                dataFim: "20-04"
            },
            {
                nome: "Touro",
                dataInicio: new Date("04-21").getTime(),
                dataFim: new Date("05-20").getTime()
            },
            {
                nome: "Gêmeos",
                dataInicio: "05-21",
                dataFim: "06-20"
            },
            {
                nome: "Câncer",
                dataInicio: "21-06",
                dataFim: "22-06"
            },
            {
                nome: "Leão",
                dataInicio: "23-07",
                dataFim: "22-06"
            },
            {
                nome: "Virgem",
                dataInicio: "23-08",
                dataFim: "22-09"
            },
            {
                nome: "Libra",
                dataInicio: "23-09",
                dataFim: "22-10"
            },
            {
                nome: "Escorpião",
                dataInicio: "23-10",
                dataFim: "21-11"
            },
            {
                nome: "Sagitário",
                dataInicio: "22-11",
                dataFim: "21-12"
            },
            {
                nome: "Capricórnio",
                dataInicio: "22-12",
                dataFim: "20-01"
            },
            {
                nome: "Aquário",
                dataInicio: "21-01",
                dataFim: new Date("18-02").getTime()
            },
            {
                nome: "Peixes",
                dataInicio: new Date("19-02").getTime(),
                dataFim: new Date("20-03").getTime()
            }
            ]

            const estudantes = await BaseDatabase.connection("Estudante")
    
            const result = estudantes && estudantes.filter((estudante) => {
                if (signo === "Touro") {
                    const data = new Date(estudante.data_nasc)
                    const dia = data.getDay()
                    const mes = data.getMonth()
                    const novaData = `${mes}-${dia}`
                    console.log(novaData)
                    if (new Date(novaData).getTime() >= new Date("04-21").getTime() || new Date(novaData).getTime() <= new Date("05-20").getTime()) {
                        return estudante
                    }
                }
            })
            return result
        } catch (error: any) {
            console.log(error.sqlMessage || error.message)
            throw new Error("Error inesperado")
        }
    }
}

   // while (estudante.lenght) {

                //     if (estudante.data_nasc === "1960-03-22") {
                //         return `Signos de Áries: ${estudante}`
                //     }
                //     else if (estudante.data_nasc === "1960-05-05") {
                //         return `Signos de Touro: ${estudante}`
                //     }
                //     else if (estudante.data_nasc === "1960-06-04") {
                //         return `Signos de Gêmeos: ${estudante}`
                //     }
                // }