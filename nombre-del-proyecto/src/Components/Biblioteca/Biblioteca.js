import React from 'react';
import SearchBar from '../SearchBar';
import ButtonList from './ButtonList';
import ButtonBar from '../indice/ButtonBar';

function Biblioteca(){
    return(
        <div>
            <SearchBar/>
            <ButtonList/>
            <ButtonBar/>
        </div>
    )
}

export default Biblioteca