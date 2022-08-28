import React, { useEffect, useState } from "react";
import { CardGenreMovie } from "./styled";

const CardButtonMovie = (props) => {
  const [toogle, setToogle] = useState(true);
  const [cor, setCor] = useState("#D18000");

  // const mudancaDeCor

  useEffect(() => {
    setCor((state) => (toogle ? "#FFFFFF" : "#D18000"));
  }, [toogle]);

  console.log(cor)

  return (
    //Como o Card precisa ficar clicável aqui acontece a mudançaGenero esse onclick permite o usuário clicar selecionar o genero e tirar ele de seleção
    <div>
      <CardGenreMovie
      onClick = {() => {
        setToogle((state) => !state);
        props.mudancaGenero(props.id)
      }}
        style={{backgroundColor: cor}}>
      {props.genre}
      </CardGenreMovie>
    </div>
  );
};
export default CardButtonMovie;
//Card dos genero de filmes.
