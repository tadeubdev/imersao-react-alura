import React from 'react'
import Logo from '../../assets/images/logo.png'
import ButtonLink from './ButtonLink';
import './Menu.css'

function Menu() {
  return (
    <nav className="Menu">

      <a href="/">
        <img src={Logo} alt="TeedFlix" className="Logo" />
      </a>

      <ButtonLink className="ButtonLink" href="/">
        Novo vídeo
      </ButtonLink>

    </nav>
  );
}

export default Menu;