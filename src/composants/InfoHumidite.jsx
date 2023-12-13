import React from 'react';
import './InfoHumidite.scss';
import humidite from '../images/humidite.png'; // Assurez-vous que le chemin est correct

export default function InfoHumidite() {
  return (
    <div className="bloc info-humidite">
      <div className="icone-humidite">
        <img src={humidite} alt="image humidite" />
      </div>
      <div className="texte-humidite">
        <h3>humidité</h3>
        <h2>59%</h2>
      </div>
    </div>
  );
}