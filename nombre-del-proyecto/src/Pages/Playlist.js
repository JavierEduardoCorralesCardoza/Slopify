import React from "react";
import SearchBar from "../Components/SearchBar";
import ButtonBar from "../Components/ButtonBar";
import ButtonList from "../Components/ButtonList";

function Playlist(props){
    return(
        <div>
            <SearchBar/>
            <p>Canciones</p>
            <ButtonBar/>
        </div>
    )
}

export default Playlist;