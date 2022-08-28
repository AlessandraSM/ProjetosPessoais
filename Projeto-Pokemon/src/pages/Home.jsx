import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CardPokemon from "../components/cardPokemon/CardPokemon";
import styled from "styled-components";
import GlobalStateContext from "../context/GlobalStateContext";
import Header from "../components/header/Header";
import { irParaPokedex, irParaDetalhes } from "../routes/coordinator";


const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  padding: 20px;
`;

const Home = () => {  

  const navigate = useNavigate();

  const { states, setters } = useContext(GlobalStateContext);

  const { detalhes } = states;
  const { setDetalhes } = setters;
  const { pokedex } = states;
  const { setPokedex } = setters;

  const addToPokedex = (pokemonToAdd) => {

    detalhes.map((pokemon) => {
      if (pokemon.name === pokemonToAdd) {
        setPokedex([...pokedex, pokemon]);
        setDetalhes(detalhes.filter((pokemonToAdd) => pokemonToAdd !== pokemon));
      }
    })

  };

  const listaPokemon =
    detalhes &&
    detalhes.map((poke) => {
      return (
        <CardPokemon
          key={poke.name}
          nome={poke.name}
          image={poke.sprites.other.dream_world.front_default}
          hasAddButton={true}
          addToPokedex={addToPokedex}
          detalhesPokemon={poke}
          irParaDetalhes={()=>irParaDetalhes(navigate, poke.name)}
        />
      );
    });

  return (
    <div>
      <Header title="Lista de Pokémons" btnEsquerda={()=>irParaPokedex(navigate)} btnEsquerdaTexto="Ir para Pokédex" hasButton={false}/>
      <ContainerGrid>
        {listaPokemon}
      </ContainerGrid>
    </div>
  );
}

export default Home;