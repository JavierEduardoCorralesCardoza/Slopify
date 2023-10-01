import './App.css';
import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Indice from './Pages/Indice';
import Biblioteca from './Pages/Biblioteca';
import { InformacionDePlaylists } from './Services/InformacionDePlaylists';
import Playlist from './Pages/Playlist';


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    InformacionDePlaylists().then((response) => {
      setData(response);
  });
  }, []);
  
  const rutasGeneradas = data?.playlists?.map((playlist) => {
    const path = `/biblioteca/${playlist.id}`;
    return (
        <Route key={playlist.id} path={path} element={<Playlist/>}/>
    );
  });

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Indice/>}/>
        <Route path='/biblioteca' element={<Biblioteca/>}/>
        {rutasGeneradas}
      </Routes>
    </Router>
  );
}

export default App;
