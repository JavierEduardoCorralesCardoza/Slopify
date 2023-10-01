import React from 'react';
import { Link } from 'react-router-dom';

function ButtonList(props){
    const elementos = [];

    console.log(props.paths)

    for (let i = 0; i < props.numeroDeElementos; i++) {
        elementos.push(<Link to={props.paths[i]}>{props.nombres[i]}</Link>);
    }

    return(
        <div>
            {elementos}
        </div>
    );
}

export default ButtonList