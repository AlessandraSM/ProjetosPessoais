import React from "react";
import { CardActorStyled, P } from "./styled";


const CardActor = (props) => {
  
  
  return (
    <CardActorStyled>
      <P>{props.name}</P>
      <P>{props.character}</P>
      <P>{props.profile_path}</P>
    </CardActorStyled>
  );
};
export default CardActor;

// Este é o Card dos filmes
