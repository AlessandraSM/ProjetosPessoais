import React, { useContext } from "react"
import GlobalStateContext from "../../context/GlobalStateContext";
import {CardStatusStyled, Titulo, Poderes} from "./styled"


const CardStatus = (props) => {
    return (
     <CardStatusStyled>
         <Titulo>Poderes:</Titulo>
        {props.poderes}
     </CardStatusStyled>
    );
  }
  
  export default CardStatus;