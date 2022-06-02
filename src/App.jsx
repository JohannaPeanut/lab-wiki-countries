import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Countrieslist from './components/Countrieslist';


function App() {
  return <div className="App">
    <Navbar />
    <BrowserRouter>
      <Routes>
          <Route path='/'element={<Countrieslist/>}/>
          {/* <Route path='/pokemon/:id' element={<SinglePokemonPage/>}/> */}
      </Routes>   
    </BrowserRouter>
  </div>;
}
export default App;
