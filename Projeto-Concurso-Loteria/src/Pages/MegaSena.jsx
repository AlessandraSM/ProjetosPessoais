import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/url";
import CardNumbers from "../Components/CardNumbers";
import { ContainerConcurso, ContainerNumbers, Div, DivCard, Img, NameConcurso, NumberConcurso, P, Select, Text } from "./styled";



const ConcursoLoterias = () => {
  const [result, setResult] = useState([]);//crio um estado para cada endpoint 
  const [concursos, setConcursos] = useState([]);
  const [concursosId, setConcursosId] = useState([]);
  const [valueSelect, setValueSelect] = useState();

  const getLoterias = async () => {
    //este endpoint é responsável por pegar uma lista de nomes de concursos
    await axios
      .get(`${BASE_URL}/loterias`)
      .then((res) => {
        setResult(res.data);//salvo a resposta do endpoint em uma variavel
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(result)
  const getDetalhesLoterias = async () => {
    //endpoint responsável por pegar os detalhes de loterias e concursos
    await axios
      .get(`${BASE_URL}/loterias-concursos`)
      .then((res) => {
        setConcursos(res.data);//salvo a res. (resposta) nesta variavel
       
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(concursos)
  
  const getlAllNumbers = async (id) => {//endpoint responsável por pegar os números de cada concurso 
    const filterConcursos = concursos.length >0 && concursos.filter((concurso)=>{
      return concurso.loteriaId === Number(valueSelect)
    })//variavel filterConcursos recebe enquanto o tamanho do concurso for maior que 0 e concurso existir retorna concurso
    if(filterConcursos[0]){//If verifica se existir o filterConcursos na posição [0]
      await axios
      .get(`${BASE_URL}/concursos/${Number(filterConcursos[0].concursoId)}`)
      .then((res) => {
        setConcursosId(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
   
  };
  

  useEffect(() => {
    getLoterias();
    getDetalhesLoterias();
   
  }, []);

  useEffect(()=>{//Este outro useEffect foi criado apenas pq toda vez que o usuário clicar select para selecionar a opção de um concurso o endpoint getAllNumbers() será invocado mostrando um array [com um valor] que foi referenciado em value dentro do select. 
    getlAllNumbers();
  },[valueSelect])
    

  const newLoterias = result.length > 0 && result.map((loteria) => {
      return (
        <option key={loteria.id} value={loteria.id}>
          {loteria.nome} 
        </option>
      );
    });

   
  const onChangeHandler = (event) => {
    setValueSelect(event.target.value);
  };
  //função responsável por receber uma mudança de estado (no caso toda vez que o usuário clicar no botão para mudar a opção do select ela é invocada)
  
  const mapNumbers = concursosId.numeros?.map((number,index)=>{
    return(
      <CardNumbers key={index} number={number}></CardNumbers>
    )
  });

  const numberConcurso = result.map((loteria)=>{
    if(Number(valueSelect) === loteria.id && concursosId !=null){
      //Se numero === loteria.id e concursoId for diferente de !null
      // retorna uma tag com o nome da loteria (no endpoint (result) o primeiro concurso é iniciado em zero=megasena)
      return <P key={loteria.id}>{loteria.nome}</P>
    }

  })
 

    return (
    <Div>
      <ContainerConcurso loteria={valueSelect}>
      <P>Concurso Loteria</P>
      <Select name="valueSelect" onChange={onChangeHandler} value={valueSelect}>
        <option value="">Escolha uma loteria:</option>
        {newLoterias} 
      </Select>
      <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABACAYAAABFqxrgAAAABmJLR0QA/wD/AP+gvaeTAAAFEElEQVR4nO2bS2wVVRjHf98tpbRFjICigNqqECMLWbAwaNSoqAhIoonGF8ZEZesjMUYJkrjAxwI0LghGg4hvVETUAIHqBqrRBSGgqJAaLFSD5SGvttC/i3PnOr29tfeemc5pir+kycxtvv/5n+/OmXvmO2eMFJFUDUwAxgGHgRYzO5mC5kXAWKAd2JtUc0CQNEvSx5JOqicnJH0habaH5nRJH0o6UqR5WtIGSfdJqhqI/lRqdLyktSqPzZLOL0NzpKT3y9TcIunyLPral9mJklrKNBuxV9Jl/6E5RtK2CjUPSroyy75HZusk7azQbMROSaNKaA6TtMlTs03ShKyTsMjTbMQLJTTnJ9R8y7c/5pGAs4FWoN63UeAEMNHM2vOaOeA3YGICzW5gipn9VGlgzqOxGSRLAEAtMCt2Pp1kCQDXlzm+gZVyvU9DJbimj+Mk3OAT5JOEMT4NlSB+IxufkuZonyCfJIzwaagEZ8WOkw6vCC9vPkn41aehjPDyNqzUh5JqgbtwY/UKoAY4CPwADPc0mAUdkp4DrgLOBU4BPwPNwLtmdqhfBUkm6TFJfyX8zS6Hb2LtvpFBe8ckLZZUU9zvXMxIPbAeWILnDWaQUwc8DTSr6BkmB4XH1Y9wc4ChzlTgK7lJH/DvlfA4MDOIpTBMBV6MTnKSxgLPhvMTjIclTQF3JdwJ9HqqOwOoAh4Al4TbwnoJymxwSWgMbCQkjeCScE5gIyGpkzQ8B/wR2klADplZZw7YFdpJQHaBGw6fBDYSktXgkrAO2BfWSxCOA6sAcmbWAcwP6ycIC82sDfLTZjNbh3twOlP4FFganRSeIs3sCWAxrmo7lHkbuNvMTkcf9KgsmdkzuELKloyNZcEOYI6ZzTOzrvg/elWWzGwrcLXcctktuFnVBNxcO01+jB1/T8+aYxoI2A+0AE1mti1l/f8ZcpRchpNkuHvDrcDFuE0XabM9fzNG0pP5ttKmHbe81wRsNLNTZUVJmitpdwaFz6wLrW2SHpH7gnsQL7RWSVoBrAEuSfgNDEbGAcuB9XJF5QJRodVwv58PZu8tc2YAX0oqrFZFV8JDwD1BLIXhWmBBdJLLXxovh/MTjKckFSpLdzA0F1v6oxqYBy4Jt4f1EpS54JIwObCRkEwCl4SxgY2EZKSkmhxwILSTgBw1s44c8EtoJwHZDW44fB7YSEg+A5eENZyZQ6ITWAmu0HoYWBjWTxBeNbPCcABYBqwIZid7tgKLopOo2izgUeCdMJ4yZRMw08yORR/Eq81dZnY/cC+wJ4C5gaYNtyPn5vwtoECpQut7kj4AbgKuw23hqwKOAt/hdrQuKI4bJLwJfIurio3C9W8nbgvfOjPrLBVUch+jmXUDG/J/PZC0tHfEoOE8M1uOK56Ujc+O1gaPmKxo8AnyScJxn4ZKEN9deiQlTS9vPklIa1PH77Hj1pQ0//QJ8knCZp+GStDUx3ESNvoE+bz+Uw/sJdlep8PAhWb2d17TcLtGJiXQ7AImm1lLpYEVXwn5ScbzlcYV8VKUgLymSD51X+aTAG8kDZe01XMRpDle7o5pmqTVnpq7JaX1Rk5FiRgtaXuFZndI6vNVH0n1kr6uUHOfpEuz7Hux6VGSlkvq7sdot6RVkvpdfpdULWmJpM4yErBW0gVZ9LVfJE2T9Jqk1iKT+yW9Lmmah+YkSa9I2lOkeUDSSkk3DkRfUkHSCEmNkkamqFkrqSFNzTj/AN2OZzrIbRdAAAAAAElFTkSuQmCC" alt="logo"/>
      <NameConcurso>{numberConcurso}</NameConcurso>
      <NumberConcurso>{concursosId.id}</NumberConcurso>
      </ContainerConcurso>

      <ContainerNumbers>
      <DivCard>
        {mapNumbers}
      </DivCard>
      <Text>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</Text>
      </ContainerNumbers>
    </Div>
  );
};
export default ConcursoLoterias;
