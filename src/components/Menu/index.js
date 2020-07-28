import React from 'react'
import Logo from '../../assets/images/logo.png'
import Button from '../Button';
import './Menu.css'

function Menu() {
  return (
    <nav className="Menu">

      <a href="/">
        <img src={Logo} alt="TeedFlix" className="Logo" />
      </a>

      <Button as="a" className="Button" href="/">
        Novo vídeo
      </Button>

    </nav>
  );
}

export default Menu;