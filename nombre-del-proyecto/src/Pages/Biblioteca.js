import React, { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import ButtonBar from "../Components/ButtonBar";
import ButtonList from "../Components/ButtonList";
import { InformacionDePlaylists } from "../Services/InformacionDePlaylists";

function Biblioteca(){
    const [data, setData] = useState(null);

    useEffect(()=>{
        InformacionDePlaylists().then((response)=>{
            console.log(response)
            setData(response);
        })
    }, []);

    const nombres = data?.playlists?.map((playlist) => {return playlist.nombre});
    const paths = data?.playlists?.map((playlist) => {return `/biblioteca/${playlist.id}`});

    return(
        <div>
            <SearchBar/>
            {!data? 
            <p>Cargando...</p> :
            <ButtonList numeroDeElementos={data.playlists.length} paths={paths} nombres={nombres}/>
            }
            <ButtonBar/>
        </div>
    )
}

export default Biblioteca;