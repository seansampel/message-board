import React from 'react'
import '../styles/Navbar.css';
import Devil from '../styles/Devil-logo.png';

export const Navbar = () => {
  

  return (
    <div id="Navbar">
      <img src={Devil} id="Devil" alt="Devil" />
      <h2 id="logo">audiologue</h2>
    </div>
  )
}

export default Navbar;