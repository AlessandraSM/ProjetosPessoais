import React from "react"
import {CardTipoStyled} from "./styled"


const CardTipo = (props) => {
    return (
     <CardTipoStyled>
         {props.tipos}
     </CardTipoStyled>
    );
}
  
export default CardTipo;