import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import CardMovie from "../../Components/CardMovie/CardMovie";
import Header from "../../Components/Header/Header";
import { ContainerCardMovie, ContainerHeader, ContainerPagination, DivGeral } from "./styled";
import PaginationMovie from "../../Pagination/PaginationMovie";
import Pagination from '@mui/material/Pagination';

const Movie = () => {
  const [movie, setMovie] = useState([]);
  const [generos, setGeneros] = useState([]); //Criei um estado de generos
  const [page, setPage] = useState(1);

  const mudarPage = (event, value) => {
    setPage(value);
  };

  // const proximaPage = (page) => {
  //   setPage(page + 1);
  // };

  // const anteriorPage = (page) => {
  //   if (page === 1) {
  //     setPage(page);
  //   } else {
  //     setPage(page - 1);
  //   }
  // };

  // const pagination = Array.from(Array(11), (_, index) => {
  //   if (page <= 11) {
  //     return index + 1;
  //   }else if(page <= 20){
  //     return index + page - 10
  //   }
  // });

  const getMovie = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular/?api_key=ee906153f1e34c7932d8e497d2ebe284&page=${page}`
      ) //Endpoint que retorna os filmes
      .then((res) => {
        setMovie(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err.response.data.status_message); //Tratamento de Erro res endpoint
      });
  };

  useEffect(() => {
    getMovie();
  }, [page]);

  const filmes = movie.results
    ?.filter((filme) => {
      if (generos.length === 0) {
        return filme;
      } else {
        return generos.every((genero) => {
          //Every filtro retorna uma lista onde o usuário vai clicar
          return filme.genre_ids.includes(genero);
        });
      }
    })
    .map((filme) => {
      return (
        <CardMovie
          id={filme.id}
          key={filme.id}
          foto={
            <img
              component="img"
              height="200"
              src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
              alt="Poster"
            />
          }
          movie={filme.title}
          date={filme.release_date}
        />
      );
    });

  // const mapPagination =
  //   movie &&
  //   pagination.map((pagina) => {
  //     return (
  //       <PaginationMovie
  //         key={pagina}
  //         number={pagina}
  //         mudarPage={mudarPage}
  //         pageSelect={pagina === page}
  //       />
  //     );
  //   });

  return (
    <DivGeral>
      <ContainerHeader>
        <Header setGeneros={setGeneros} generos={generos} />
      </ContainerHeader>

      <ContainerCardMovie>{filmes}</ContainerCardMovie>

      <ContainerPagination>
      <Pagination count={10} page={page} onChange={mudarPage} />
      </ContainerPagination>

    </DivGeral>
  );
};
export default Movie;

{/* <div>
        <button onClick={() => anteriorPage(page)}>
          Anterior
        </button>
      </div>
      {mapPagination}
      <div>

        <button onClick={() => proximaPage(page)}>
          Próximo
        </button>
      </div> */}
