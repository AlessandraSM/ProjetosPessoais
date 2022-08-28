import React from "react";
import ButtonThreeD from "../ButtonThreeD/ButtonThreeD";
import {HeaderStyled, H1, Button} from "./styled"

function Header(props) {
    return (
      <HeaderStyled >
       <ButtonThreeD onClick={props.btnEsquerda} text={props.btnEsquerdaTexto} cor="green"/>
       <H1>{props.title}</H1>
       {props.hasButton === true ? <ButtonThreeD onClick={props.btnDireita} text={props.btnDireitaTexto} cor="darkblue"/> : null}
      </HeaderStyled>
    );
  }
  
  export default Header;