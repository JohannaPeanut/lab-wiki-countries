import {Link} from 'react-router-dom'

const Countrieslist = (props) => {
    
  return (
    <div>
        <h1>Countrieslist</h1>
        
        <ul>
        {props.list.map((element)=> <li key={element.id}>
          <Link to={`/country/${element.alpha3Code}`}>
           {element.name.common}
          </Link>
            </li> )}
        </ul>
    </div>
  )
}

export default Countrieslist