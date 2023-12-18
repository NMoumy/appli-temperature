import React from 'react';
import './Entete.scss';
import imagesLogo from '../images/temperatureIntelligente.png'; // Assurez-vous que le chemin est correct

export default function Entete() {
  return (
    <header className="entete">
      <div className='logo'>
        <img src= {imagesLogo} alt="logo" />
        <h2>Température Local</h2>
      </div>
    </header>
  );
}