import React, { useState, useEffect } from 'react';
import './InfoHumidite.scss';
import humiditeImage from '../images/humidite.png'; // Assurez-vous que le chemin est correct
import { obtenirDerniereDonneeHumidite } from '../data/donnee-modele';

export default function InfoHumidite() {

  const [humidite, setHumidite] = useState(null);

  useEffect(() => {
    const desinscrire = obtenirDerniereDonneeHumidite(nouvelleHumidite => {
      setHumidite(nouvelleHumidite);
    });

    return () => desinscrire();
  }, []);


  return (
    <div className="bloc info-humidite">
      <div className="icone-humidite">
        <img src={humiditeImage} alt="image humidite" />
      </div>
      <div className="texte-humidite">
        <h3>humidité</h3>
        <h2>{humidite ? `${humidite}%` : 'Chargement...'}</h2>
      </div>
    </div>
  );
}