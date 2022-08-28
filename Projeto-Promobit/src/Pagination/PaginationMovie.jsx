import React from "react";

const PaginationMovie = (props) => {
    return(
        <div>
            <button onClick={()=>props.mudarPage(props.number)}>{props.number}</button>
        </div>
    )
}

export default PaginationMovie;