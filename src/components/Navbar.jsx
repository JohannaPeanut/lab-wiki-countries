
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div>
      <div className="container">
          <nav className="navbar navbar-dark bg-primary mb-3">
             <Link className="navbar-brand" to={"/"}>LAB - Wikicountries</Link>
         </nav>  
      </div> 
    </div>
  )
}

export default Navbar