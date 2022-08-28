import styled from "styled-components"

export const CardPokemonStyled = styled.li`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 40px 1fr 60px;
border: 1px solid #ccc;
border-radius: 15px;
width: 100%;
height: 350px;
list-style: none;
box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.55);
background-color: #cfc165;
`

export const TituloCard = styled.h2`
    color: green;
    grid-row: 1/2;
    grid-column: 1/-1;
    text-align: center;
`

export const ContainerImagem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Imagem = styled.img`
    width: 150px;
    max-height: 200px;
    grid-row: 2/3;
`;

export const ContainerButtons = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 3/4;
`;

export const ContainerLeft = styled.div`
  margin-right: 10px;
`;

export const ContainerRight = styled.div`
  margin-left: 10px;
`;

export const Button = styled.button`
  padding: 8px;
  border: 2px solid black;   
  cursor: pointer;	
`