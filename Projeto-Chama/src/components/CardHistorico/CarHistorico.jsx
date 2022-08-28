import React from "react";
import { CardHistoricoStyled, CardP } from "./styled";

const CardHistorico = (props) => {
  //Card Historico

  return (
    <div>
      <CardHistoricoStyled>
        <button onClick={() => props.pesquisaDnv(props.name)}>
           <p>{props.historico}</p>
           <CardP>Clique aqui para ver este perfil novamente</CardP>
        </button>
      </CardHistoricoStyled>
    </div>
  );
};

export default CardHistorico;
