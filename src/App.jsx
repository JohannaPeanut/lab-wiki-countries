import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Countrieslist from './components/Countrieslist';
import CountryDetails from './components/CountryDetails';
import { useEffect, useState } from 'react'


function App() {

  // countries.forEach((country) => country.id=Math.random())
  const [ countryArray, setCountries ] = useState([])

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
    .then((response) => response.json())
    .then((data) => {
        data.forEach((country) => country.id=Math.random())
        setCountries(data)
    })
}, []) 

  //console.log(countries[0])

  return <div className="App container">
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path='/'element={<Countrieslist list={countryArray}/>}/>
          <Route path='/country/:id' element={<CountryDetails list={countryArray}/>}/>
      </Routes>   
    </BrowserRouter>
  </div>;
}

export default App;
