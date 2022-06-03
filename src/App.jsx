import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Countrieslist from './components/Countrieslist';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json'
import { useEffect, useState } from 'react'


function App() {

  countries.forEach((country) => country.id=Math.random())
  console.log(countries[0])
  const [ countryArray, setCountries ] = useState(countries)

  return <div className="App">
    <Navbar />
    <BrowserRouter>
      <Routes>
          <Route path='/'element={<Countrieslist list={countryArray}/>}/>
          <Route path='/country/:id' element={<CountryDetails list={countryArray}/>}/>
      </Routes>   
    </BrowserRouter>
  </div>;
}
export default App;
