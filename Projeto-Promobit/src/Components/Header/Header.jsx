import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../Constants/url";
import { HeaderStyled, H1, DivGenres, P, Vetor } from "./styled";
import CardButtonMovie from '../../Components/ButtonMovie/CardButtonMovie'
import { ContainerVetor } from "../../Pages/MovieDetail/styled";


function Header({setGeneros, generos}) {//invés de props passa o estado por parâmetro para usar 
  const [listGenre, setListGenre] = useState ([])

  const getGenreMovie = async () => {//Endpoint que retorna os lista generos dos filmes
    await axios
      .get(`${base_url}`)
      .then((res) => {
        setListGenre(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err.response.data.status_message);//Tratamento de Erro!
      });
  };

  useEffect(() => {
    getGenreMovie();
   
   }, []);

     const mudancaGenero = (id)=>{//Função que faz a mudança de Genero 
    
    const index = generos.indexOf(id)//método indexOf elemento de pesquisa do ponto inicial  
      const newGeneros = [...generos]//cópia do array retornando um novo array 

      if(index === -1){
        newGeneros.push(id)//adicionando um elemento em uma lista 
      }else{
        newGeneros.splice(index,1)//tira um elemento da lista 
      }
      setGeneros(newGeneros)
    
   }
  //  const mudancaCor = (id, color) => {
  //   let element = document.getElementById(id);
  //   if (element != null) {
  //     element.style.backgroundColor = active ? color : "#D18000";
  //   }
   

  const mapListGenres = listGenre.genres?.map((genres)=>{
    return (
      <CardButtonMovie
      mudancaGenero={mudancaGenero}//Passando a função dentro CardButtonMovie como props  
      key={genres.id}
      id={genres.id}//Adicionado depois 
      genre={genres.name}
      />
    )
  });
 
  return (
    <HeaderStyled>
      <ContainerVetor>
      <Vetor>TMDB</Vetor>
      </ContainerVetor>
     
      <H1>Milhões de filmes, séries e pessoas para descobrir. Explore já!</H1>
      <P>FILTRE POR:</P>
      <DivGenres>
        {mapListGenres}
      </DivGenres>
    </HeaderStyled>
  );
}

export default Header;
