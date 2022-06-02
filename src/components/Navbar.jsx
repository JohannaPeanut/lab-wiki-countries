
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div>
        <BrowserRouter>
        <nav>
            <Link to="/">LAB - Wikicountries</Link>
        </nav>   
        </BrowserRouter>
    </div>
  )
}

export default Navbar