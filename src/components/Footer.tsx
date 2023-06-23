import React from 'react';
import './Footer.sass';
// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
        <img className='logoIvv' src="/Logo Footer.svg" alt="Logo Footer" />
        <a href="#">
        <img className='logoInsta' src="/instagram.svg" alt="Logo instagram" />
        </a>
        <p>© Copyright 2022 - Instituto Voz à Vida</p>
    </footer>
  );
}

export default Footer;