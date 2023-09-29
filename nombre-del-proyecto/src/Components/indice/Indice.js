import React from 'react';
import SearchBar from '../SearchBar.js';
import ButtonBar from './ButtonBar.js';
import LlamadoClientes from './LlamadoClientes.js';

function Indice(){
    return(
        <div>
            <SearchBar/>
            <LlamadoClientes/>
            <ButtonBar/>
        </div>
    )
}

export default Indice;