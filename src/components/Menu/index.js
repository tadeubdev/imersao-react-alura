import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import Button from '../Button';

import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">

      <Link to="/">
        <img src={Logo} alt="TeedFlix" className="Logo" />
      </Link>

      <Button as={Link} className="Button" to="/cadastro/video">
        Novo vídeo
      </Button>

    </nav>
  );
}

export default Menu;
