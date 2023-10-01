import React from 'react';
import { Link } from 'react-router-dom';

function ButtonBar(props){
    return(
        <div>
            <Link to="/">Inicio</Link>
            <Link to="/biblioteca">Biblioteca</Link>
        </div>
    )
}

export default ButtonBar;