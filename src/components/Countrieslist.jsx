import { useEffect, useState } from 'react'
import countries from './../countries.json'

const Countrieslist = () => {
    const countriesWithId = countries.forEach((country) => country.id=Math.random())
    const [ countryArray, setCountries ] = useState(countriesWithId)

  return (
    <div>
        <h1>Countrieslist</h1>
        <ul>
            {countryArray && 
            (countryArray.map((country)=> <li key="country.id">{country.name}</li>))}
        </ul>
    </div>
  )
}

export default Countrieslist