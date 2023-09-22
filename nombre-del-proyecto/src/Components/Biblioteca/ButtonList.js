import React from 'react';
import { Link } from 'react-router-dom';

function ButtonList(){
    return(
        <div>
            <Link to="/biblioteca/playlist/cancion1">cancion 1</Link>
            <Link to="/biblioteca/playlist/cancion2">Cancion 2</Link>
            <Link to="/biblioteca/playlist/cancion3">Cancion 3</Link>
        </div>
    );
}

export default ButtonList