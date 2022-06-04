import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

const CountryDetails = (props) => {
  const element = useParams()
  const id = element.id

  const [foundCountry, setCountry] = useState('')

  // const foundCountry = props.list.find(element => element.alpha3Code === id);
  useEffect(() => {
    fetch(`https://ih-countries-api.herokuapp.com/countries/${id}`)
    .then((response) => response.json())
    .then((data) => {
        setCountry(data)
    })
}, [id]) 


  return (
    <div>
      {foundCountry && (
        <div className="col-7">
        <h1>{foundCountry.name.common} ({foundCountry.alpha3Code})</h1>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} alt={foundCountry.name.common} />
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{foundCountry.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    551695 km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Region</td>
                  <td>
                  <p>{foundCountry.region}</p>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                  <ul>
                    {foundCountry.borders.map((land) => (
                   <li key={land}><Link to={`/country/${land}`}>{land}</Link></li>))}
                  </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      
      /* <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} alt={foundCountry.name.common} />
      <p><b>Region: </b>{foundCountry.region}</p>
      <p><b>Subregion: </b>{foundCountry.subregion}</p>
      <p><b>Capital: </b>{foundCountry.capital[0]}</p>
      <b>Border Countries:</b>
      <ul>
        {foundCountry.borders.map((land) => (
        <li key={land}><Link to={`/country/${land}`}>{land}</Link></li>))}
      </ul>
    */
      )}
    </div> 
  )
}

export default CountryDetails