import React from "react";
import { CardMovieStyled, P } from "./styled";
import { useNavigate } from 'react-router-dom'

const CardMovie = (props) => {
  const navigate = useNavigate()

  const irParaDetalhes = (id) =>{
    navigate (`/detailMovie/${id}`)
  }
  
  return (
    <CardMovieStyled onClick={()=>irParaDetalhes(props.id)}>
      {props.foto}
      <P>{props.movie}</P>
      <P>{props.date}</P>
    </CardMovieStyled>
  );
};
export default CardMovie;

// Este é o Card dos filmes
