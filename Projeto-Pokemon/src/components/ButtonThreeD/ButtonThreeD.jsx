import React from "react";
import styled from "styled-components";

const ButtonPushable = styled.button`
    position: relative;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    transition: filter 250ms;
    span{
      display: block;
      position: relative;
      padding: 9px 27px;
      border-radius: 12px;
      font-size: 1.25rem;
      color: white;
      ${(props) => {
        if(props.cor === 'red') {
            return 'background-color: hsl(0deg 100% 35%);'
        } else if(props.cor === 'green') {
            return 'background-color: hsl(150deg 100% 35%);'
        } else if(props.cor === 'darkblue') {
            return 'background-color: rgb(1,73,99);'
        } else {
            return 'background-color: rgb(119, 180, 201);'
        }
      }}
      will-change: transform;
      transform: translateY(-4px);
      transition: transform 600ms cubic-bezier(.3, .7, .4, 1);
      }
    :hover{      
      filter: brightness(110%);
    }
    :hover > span{      
      transform: translateY(-6px);
      transition: transform 250ms cubic-bezier(.3, .7, .4, 1.5);
    }
    :hover > Shadow{
      transform: translateY(4px);
      transition: transform 250ms cubic-bezier(.3, .7, .4, 1.5);
    }
    :active{      
      transform: translateY(-2px);
    }
    :active > span{
      transform: translateY(-2px);
      transition: transform 34ms;
    }
    :active > Shadow{      
      transform: translateY(1px);
      transition: transform 34ms;
    }
    :focus:not(:focus-visible) {
      outline: none;
    }    
  @media screen and (max-width: 768px){
    span{
      padding: 9px 18px;
    }
  }
`;

const Shadow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: hsl(0deg 0% 0% / 0.25);
    will-change: transform;
    transform: translateY(2px);
    transition:
      transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
`;

const Edge = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: linear-gradient(
      to left,
      hsl(0deg 0% 8%) 0%,
      hsl(0deg 0% 16%) 8%,
      hsl(0deg 0% 16%) 92%,
      hsl(0deg 0% 8%) 100%
    );
`;

const ButtonThreeD = (props) => {
  return (
    <div>
          <ButtonPushable cor={props.cor} title={props.title} onClick={props.onClick}>
            <Shadow/>
            <Edge/>
            <span>{props.text}</span>
          </ButtonPushable>
    </div>
  );
};

export default ButtonThreeD;
