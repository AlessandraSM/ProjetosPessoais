import React from "react" 
import { CardStyledNumber } from "./styled" 

const CardNumber = (props) => {
  return (
    <div>
     <CardStyledNumber>{props.number}</CardStyledNumber>
    </div>
  );
};
export default CardNumber;
