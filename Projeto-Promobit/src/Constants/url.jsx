import { useParams } from "react-router-dom"

export const BASE_URL2 = 'https://api.themoviedb.org/3/movie/popular/?api_key=ee906153f1e34c7932d8e497d2ebe284'
//Esta URL retorna a lista de Filmes 

export const BASE_URL = `https://api.themoviedb.org/3/movie/${useParams.filmes}?api_key=ee906153f1e34c7932d8e497d2ebe284`
//Esta URL retorna os filmes pelo ID usando o Params


export const base_url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=ee906153f1e34c7932d8e497d2ebe284'
//Esta URL retorna os generos com a chave Key que fiz o cadastro na API 




 



