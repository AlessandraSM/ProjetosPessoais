import React from "react"
import {CardAtaqueStyled, Titulo, Ataque } from "./styled"


const CardAtaque = (props) => {
    return (
     <CardAtaqueStyled>
         <Titulo>Principais Ataques:</Titulo>
         <Ataque>{props.ataque}</Ataque>
     </CardAtaqueStyled>
    );
}
export default  CardAtaque;