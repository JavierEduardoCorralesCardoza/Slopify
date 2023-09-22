import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Indice from './Components/indice/Indice';
import Biblioteca from './Components/Biblioteca/Biblioteca';
import Playlist from './Components/Biblioteca/Playlist/Playlist';
import Cancion from './Components/Biblioteca/Playlist/Cancion/Cancion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Indice/>}/>
        <Route path='/biblioteca' element={<Biblioteca/>}/>
        <Route path='/biblioteca/playlist' element={<Playlist/>}/>
        <Route path='/biblioteca/playlist/cancion1' element={<Cancion/>}/>
        <Route path='/biblioteca/playlist/cancion2' element={<Cancion/>}/>
        <Route path='/biblioteca/playlist/cancion3' element={<Cancion/>}/>
      </Routes>
    </Router>
  );
}

export default App;
