import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CardHistorico from "../../components/CardHistorico/CarHistorico";
import GlobalStateContext from "../../context/GlobalStateContext";
import { voltar } from "../../routes/Coordinator";
import {
  ContainerHeader,
  ContainerHistorico,
  DivButton,
  DivGeral,
  H1,
  Header,
} from "./styled";

const ChamaDetail = () => {
  const { states, setters, requests } = useContext(GlobalStateContext);
  const navigate = useNavigate();


  const pesquisaDnv = (name) => {//Nessa função 
    setters.setInput(name)
    requests.getUserSingle(name)
    voltar(navigate)
    
  };

  const historicos = states.historico?.map((hist) => {
    return (
      <CardHistorico
        key={hist.id}
        historico={hist}
        pesquisaDnv={pesquisaDnv}
        name={hist}
      />
    );
  });

  return (
    <DivGeral>
      <ContainerHeader>
        <Header>Chama</Header>
      </ContainerHeader>

      <ContainerHistorico>
        <H1>Lista de Histórico</H1>
        {historicos}
      </ContainerHistorico>

      <DivButton>
        <Button
          onClick={() => voltar(navigate)}
          color="primary"
          variant="contained"
        >
          Voltar à página inicial
        </Button>
      </DivButton>
    </DivGeral>
  );
};
export default ChamaDetail;
