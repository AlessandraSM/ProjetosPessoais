import styled from "styled-components"

export const CardStyledNumber = styled.div `
    width: 6vw;
    height: 6vw;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    font-size: 1.688rem;
    line-height: 33px;
    border-bottom-style: outset;
    padding: 5px;
    margin: 15px 5px;
    
    @media(max-width: 800px) {
        width: 9vw;
        height: 9vw;
        font-size:20px;
        line-height: 0px;
    }
`
