import React from "react"
import ButtonThreeD from "../ButtonThreeD/ButtonThreeD";
import {CardPokemonStyled, Button, TituloCard, ContainerImagem, Imagem, ContainerButtons, ContainerLeft, ContainerRight } from "./styled"

const CardPokemon = (props) => {
    return (
      <CardPokemonStyled>
          <TituloCard>{props.nome}</TituloCard>
          <ContainerImagem>
            <Imagem src={props.image}/>
          </ContainerImagem>
          <ContainerButtons>
            <ContainerLeft>
              {props.hasAddButton === true ? <ButtonThreeD onClick={() => props.addToPokedex(props.nome)} text="Adicionar na Pokédex"  cor="green"/> : <ButtonThreeD onClick={() => props.removeFromPokedex(props.nome)} text="Remover da Pokédex"  cor="red"/>} 
            </ContainerLeft>
            <ContainerRight>
              <ButtonThreeD onClick={()=>props.irParaDetalhes()} text="Ver detalhes" cor="darkblue" />
            </ContainerRight>
          </ContainerButtons>
      </CardPokemonStyled>
    );
  }
  
  export default CardPokemon;