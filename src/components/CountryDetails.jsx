import { useParams } from "react-router-dom"

const CountryDetails = (props) => {
  const element = useParams()
  const id = element.id

  const foundCountry = props.list.find(element => element.alpha3Code === id);
  console.log(foundCountry)

  return (
    <div>
      <h1>{foundCountry.name.common}</h1>
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} alt={foundCountry.name.common} />
      <p><b>Region: </b>{foundCountry.region}</p>
      <p><b>Subregion: </b>{foundCountry.subregion}</p>
    </div>
  )
}

export default CountryDetails