import styled from "styled-components";

export const Div = styled.div`//Div geral 
  width: 100%;
  min-height: 100vh;
  display: flex;
  background: rgb(239, 239, 239);
  *{
    box-sizing: border-box;
  }
  @media(max-width: 800px) {
        flex-direction: column;
        width: 100%;
    }
  `;

const getBackground = (loteria)=> {//Função swicth que faz a mudança de cor na tela 
   
  switch (loteria){
    case "0": 
      return "#6DF29C"
      
    case "1" :
      return "#7D6BF2"
     
    case "2" :
      return "#D979C9"
     
    case "3" :
      return "#F2955E"
      
    case "4" :
      return "#58A673"
     
    case "5" :
      return "#BFAA84"
       
    default:
      console.log("nenhuma destas opções");
    
  }
}
export const ContainerConcurso = styled.div`//Div Concurso parte colorida 
  background: radial-gradient(50% 140% at right, #efefef 50%, ${(p)=>getBackground(p.loteria)} 50.1%);
  background-color:${(p)=>getBackground(p.loteria)};
  width: 38.3125%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-right: 50px;
 
  @media(max-width: 800px) {
        height: 80%;
        width: 100%;
        background: radial-gradient(100% 10% at bottom, #dcdcdc 50%, ${(p) => getBackground(p.loteria)} 50.1%);
        padding-right: 0px;
        font-size: 20px;
    }
`;

export const P = styled.p`//Aqui retorno do endpoint Concurso Loteria e nome dos concursos 
  margin: 0px 20px;
  font-family: Montserrat;
  font-size: 35px;
  font-weight: 700;
  text-align: left;
  color:whitesmoke;
  padding: 20px;
  text-shadow: grey 0.1em 0.1em 0.2em;
  
   @media(max-width: 800px) {
        padding: 30px;
        text-align: center;
        font-size: 35px;
        
    }
   `;

export const Select = styled.select`//Retorno do endpoint seletor com nomes dos concursos 
  background-color: #dcdcdc;
  height: 36px;
  font-style: normal;
  font-weight: 550;
  padding-left: 20%;
  border-radius: 20px;
  width: 60%;
  padding: 10px;
  text-transform: uppercase;
  border: none;
  outline: transparent;
  font-family: Montserrat,sans-serif;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  @media(max-width: 800px) {
        font-size: 14px;
        text-align: center;
        margin-left: 25%;
        
        
        
    }
  `;

export const Img = styled.img`//Imagem 
padding-left: 100px;
margin: 25px 150px 25px 50px;
@media(max-width: 800px) {
        line-height: 20px;
        font-size: 12px;
        padding-left: 100px;
        text-align: center;
        
    }
`

export const NameConcurso = styled.p`//Nome do Concurso 
 width: 100%;
 text-transform: uppercase;
 font-weight: bold;
 
`
export const NumberConcurso = styled.p`//Numero do Concurso 
  padding-left: 60px;
  font-weight: bold;
     
`
export const ContainerNumbers = styled.div`//Parte Cinza do projeto 
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 1rem;
   
`;

export const DivCard = styled.div`//Div com retorno dos card na tela 
  width: 90%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 200px;
`;

export const Text = styled.p`//Frase meramente ilustrativa 
margin-top: 250px;
@media(max-width: 800px) {
        line-height: 20px;
        font-size: 12px;
       
    }
`
