import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Indice from './indice/Indice.js';
import Biblioteca from './Biblioteca/Biblioteca.js';
import Playlist from "./Biblioteca/Playlist/Playlist.js"

function Routeador(){
    return(
        <div>
            <Routes>
                <Route path='/' component={Indice}/>
                <Route path='/indice' component={Indice}/>
                <Route path='/biblioteca' component={Biblioteca} exact/>
                <Route path='/biblioteca/playlist' component={Playlist}/>
            </Routes>
        </div>
    )
}

export default Routeador