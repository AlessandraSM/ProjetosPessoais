import { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext";
import { BASE_URL } from "../constants/urls";
import axios from "axios";

const GlobalState = (props) => {  
  const [list, setList] = useState([]);
  const [detalhes, setDetalhes] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    getPokemon();
  },[])

  
  useEffect(() => {
    const novaPokeList = [];
    list &&
      list.forEach((poke) => {
        axios
          .get(`${BASE_URL}/${poke.name}`)
          .then((response) => {
            novaPokeList.push(response.data);
            if (novaPokeList.length === list.length) {
              const novaPokeListOrdenada = novaPokeList.sort((a,b)=>{
                return a.id - b.id;
              })
              setDetalhes(novaPokeListOrdenada);
            }
          })
          .catch((erro) => {
            console.log(erro);
          });
      });

  }, [list]);


  const getPokemon = () => {
    axios
      .get(`${BASE_URL}?limit=50&offset=0`)
      .then((response) => {
        setList(response.data.results);
      })
      .catch((error) => {
        console.log("Desculpe houve um erro, tente novamente!", error.response);
      });
  };

  const states = { list, detalhes, pokedex };
  const setters = { setList, setDetalhes, setPokedex };
  const requests = {};

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
