import {Link} from 'react-router-dom'

const Countrieslist = (props) => {
    
  return (
    <div className="container">
        <div className="row">
          <div className="col-5">
            <h1>Countrieslist</h1>

            <ul>
            {props.list && 
             (props.list.map((element)=> <li key={element.id}>
             <Link to={`/country/${element.alpha3Code}`}>
               {element.name.common}
              </Link>
                </li> ))}
           </ul>
        </div>
      </div>
    </div>
  )
}

export default Countrieslist