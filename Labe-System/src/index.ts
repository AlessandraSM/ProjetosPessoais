import { Request, Response } from "express"
import { app } from "./app"
import criarTurma from "./endpoints/CriarTurma"
import buscarTurmas from "./endpoints/BuscarTurmas"
import mudarModulo from "./endpoints/MudarModulo"
import criarEstudante from "./endpoints/CriarEstudante"
import buscarEstudantes from "./endpoints/BuscarEstudantes"
import mudarEstudanteTurma from "./endpoints/MudarEstudanteTurma"
import criarDocente from "./endpoints/CriarDocente"
import buscarDocentes from "./endpoints/BuscarDocentes"
import mudarDocenteTurma from "./endpoints/MudarDocenteTurma"
import buscaEstudanteDocente from "./endpoints/EstudanteDocente"
import estudantesMesmoHobby from "./endpoints/BuscarEstudantesPorHobby"
import buscarDocentePorEspecialidade from "./endpoints/BuscarDocentesPorEspecialidade"
import buscarEstudanteSigno from "./endpoints/BuscarEstudanteSigno"

app.post("/criarturma", criarTurma)
app.get("/buscarturma", buscarTurmas)
app.put("/mudarmodulo/:id", mudarModulo)

app.post("/criarestudante", criarEstudante)
app.get("/buscaestudante", buscarEstudantes)
app.put("/mudarestudanteturma/:id", mudarEstudanteTurma)

app.post("/criardocente", criarDocente)
app.get("/buscardocentes", buscarDocentes)
app.put("/mudardocenteturma/:id", mudarDocenteTurma)

app.get("/estudantedocente/:turma_id", buscaEstudanteDocente)
app.get("/estudantemesmohobby", estudantesMesmoHobby)
app.get("/buscardocenteespecialidade", buscarDocentePorEspecialidade)
app.get("/buscarestudanteporsigno/:signo", buscarEstudanteSigno)
