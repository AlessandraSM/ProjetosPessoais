import React, { useContext } from "react";
import {ContainerInfoUser,ContainerMapInfo,DivButton,DivGeral,Form,H1,Img, P} from "./styled";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import CardUser from "../../components/Card/CardUser";
import { useNavigate } from "react-router-dom";
import { irParaDetail } from "../../routes/Coordinator";
import GlobalStateContext from "../../context/GlobalStateContext";


const Chama = () => {
  const navigate = useNavigate()
  const {states, setters, requests} = useContext(GlobalStateContext)


  
  const handleChange = (event) => {// recebendo a informação que usuário digita 
    setters.setInput(event.target.value)
  }
  
  const handleSubmit = (event) => { //envia a informação que o usuário digitou 
      event.preventDefault();//prevenir a página de ser recarregada (nao deixar atualizar a pagina quando clicar no botao enviar)
      requests.getUserSingle(event.target.userGitHub.value)
      setters.setInput("")
      setters.setHistorico([...states.historico, states.input])//inserir GlobalState, aparecer nos cards as informações 
      
  }
return (
    <DivGeral>
      <ContainerInfoUser>
        <div>
          <Img
            height="150px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBMFdsUl9b1zLVBxNNnJPyovDPinngoRGbLw&usqp=CAU"
            alt="logo GitHub"
          />
        </div>
        <H1>Chama</H1>

        <Form onSubmit={handleSubmit}>

          <TextField
            name={"userGitHub"}
            onChange={handleChange}
            value={states.input}
            type="text"
            style={{ background: "#DCDCDC", width: "250px" }}
            label="Nome do usuário usado no GitHub"
            variant="filled"
          />
          <Button
            type="submit"//propriedade que permite o envio das informações 
            style={{ width: "200px", height: "100%" }}
            variant="contained"
          >
            Enviar
          </Button>
        </Form>
      </ContainerInfoUser>

      <ContainerMapInfo>
        <P>Informações do usuário Github</P>
        
        <CardUser
          key={states.inputStore.id}
          avatar_url={states.inputStore.avatar_url}
          bio={states.inputStore.bio}
          email={states.inputStore.email}
          name={states.inputStore.name}
          login={states.inputStore.login}
        ></CardUser>

      </ContainerMapInfo>

      <DivButton>
        <Button onClick={()=> irParaDetail(navigate)} color="primary" variant="contained">
          Ir para página de detalhes
        </Button>
      </DivButton>
    </DivGeral>
  );
};
export default Chama;
