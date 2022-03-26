import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";



function Header() {
  return (
    <header className='header'>
        <Link className='header__logo' to="/">Thoughts</Link>

        <nav className='header__nav'> 
            <Link className='header__link' to="/">Login</Link>
            <Link className='header__link' to="/signup">Sign Up</Link>
        </nav>
    </header>
  )
}

export default Header