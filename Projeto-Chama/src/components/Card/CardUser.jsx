import React from "react";
import { CardHistoricoImg, CardHistoricoP, CardUserStyled } from "./styled";

const CardUser = ({ user, avatar_url, bio, email, name, login }) => {
  //Card do Usuário

  return (
    <div>
      <CardUserStyled>
        <CardHistoricoP>{user}
        {avatar_url?(
          <CardHistoricoImg height="180px" src={avatar_url} alt="avatar"></CardHistoricoImg>
        ):(<></>)}</CardHistoricoP>
        <CardHistoricoP>Nome: {name}</CardHistoricoP>
        <CardHistoricoP>Github: {login}</CardHistoricoP>
        <CardHistoricoP>Biografia: {bio}</CardHistoricoP>
        <CardHistoricoP>E-mail: {email}</CardHistoricoP>
      </CardUserStyled>
    </div>
  );
};

export default CardUser;
