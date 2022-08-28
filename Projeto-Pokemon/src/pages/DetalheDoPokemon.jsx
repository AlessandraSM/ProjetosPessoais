import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardAtaques from "../components/cardAtaques/CardAtaques";
import CardTipo from '../components/cardTipo/CardTipo';
import CardStatus from '../components/cardStatus/CardStatus';
import Header from "../components/header/Header";
import { irParaPokedex, voltar } from "../routes/coordinator";
import { BASE_URL } from "../constants/urls";
import axios from 'axios';
import { Poderes } from "../components/cardStatus/styled";
import { Tipo } from "../components/cardTipo/styled";
import { Ataque } from "../components/cardAtaques/styled";
import ImagemPokemonFrente from "../components/imagemPokemon/ImagemPokemonFrente";
import ImagemPokemonCosta from "../components/imagemPokemon/ImagemPokemonCosta";
import styled from "styled-components";

const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
`;

const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 60px;
  row-gap: 20px;
  padding: 20px;
`;

const ContainerFlexLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 1/2;
  width: 100%;
`;


export default function DetalheDoPokemon() {
    
   const [detalhesPoke, setDetalhesPoke] = useState()
    const params = useParams()
    console.log(params.pokemon)

    const getDetails = ()=>{
      axios.get (`${BASE_URL}/${params.pokemon}`)
      .then((res)=>{
        setDetalhesPoke(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })

    }

    useEffect(()=>{
      getDetails()
    },[])

  const navigate = useNavigate();

  const status = detalhesPoke && detalhesPoke.stats.map((poder)=>{
  
    return (
      <Poderes key={poder.stat.name}>{poder.stat.name}: {poder.base_stat}</Poderes>
    )
  })

  const tipos = detalhesPoke && detalhesPoke.types.map((tipo)=>{
  
    return (
      <Tipo key={tipo.type.name}>{tipo.type.name}</Tipo>
    )
  })

  const ataque = detalhesPoke && detalhesPoke.moves.map((move,index)=>{
  
    return (
      
    index < 6 && <Ataque key={move.move.name}>{move.move.name}</Ataque>
    )
  })

  const imagemFrente = detalhesPoke && detalhesPoke.sprites.other.dream_world.front_default
  const imagemCosta = detalhesPoke && detalhesPoke.sprites.back_default

  return (
        <>
        <Header title="Detalhes do Pokémon" btnEsquerda={()=>irParaPokedex(navigate)} btnDireita={()=>voltar(navigate)} btnDireitaTexto="Voltar" btnEsquerdaTexto="Ir para Pokédex" hasButton={true}/>
      <ContainerCenter>
       <ContainerGrid>
        <ContainerFlexLeft>
          <ImagemPokemonFrente imagem={imagemFrente} />
          <ImagemPokemonCosta imagem={imagemCosta} />
          <CardTipo tipos={tipos}/>
        </ContainerFlexLeft>
        <CardStatus poderes={status} />
        <CardAtaques ataque={ataque}/>
       </ContainerGrid>
      </ContainerCenter>
        </>
  );
}
