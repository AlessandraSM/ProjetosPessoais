import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/url/url";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {//Criando um estado Global 
  const [user, setUser] = useState([]); //estado do endpoint
  const [input, setInput] = useState(""); //controla o que é escrito no input
  const [inputStore, setInputStore] = useState(""); //guarda a informação no estado
  const [historico, setHistorico] = useState([]); //criei um estado pois este recebe uma lista de info

  const getUser = async () => {
    //Endpoint que retorna um alista de usuário do GitHub
    await axios
      .get(`${BASE_URL}`) //input novo estado com um usúario único
      .then((res) => {
        // console.log('LISTA',res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
//   console.log(input.avatar_url)

  const getUserSingle = async (name) => {//Não quero dentro do useEffect, pois ele não precisa ser renderizado assim que a página é inicializada. 
    //Endpoint que retorna um usuário único do GitHub
    console.log('TESTE', input)
    await axios
      .get(`${BASE_URL}/${name}`) //input novo estado com um usúario único
      .then((res) => {
        // console.log('UNICO', res.data);
        setInputStore(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

   useEffect(() => {
    getUser();
   
  }, []);
//   console.log(input)
 
const states = { user, input, inputStore, historico };//Declarando state, setters e requests
const setters = { setUser, setInput, setInputStore, setHistorico };//Aqui os setters 
const requests = {getUser, getUserSingle };

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
