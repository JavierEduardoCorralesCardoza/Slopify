import React from 'react';
import SearchBar from '../Components/SearchBar.js';
import ButtonBar from '../Components/ButtonBar.js';
import LlamadoClientes from '../Components/LlamadoClientes.js';

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