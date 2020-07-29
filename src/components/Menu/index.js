import React from 'react';
import Logo from '../../assets/img/LogoMain.png';
import './Menu.css';
import Button from '../Button';

export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="AluraFlix Logo" />
      </a>
      <Button as="a" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}
