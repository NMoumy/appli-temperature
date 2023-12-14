import React, { useEffect, useState } from 'react';
import './InfoTemperature.scss';
import imgArrierePlan from '../images/imgArrierePlan.jpg'; // Assurez-vous que le chemin est correct
import ambient from '../images/ambient.png'; // Assurez-vous que le chemin est correct
import { obtenirDerniereDonneeTemperature } from '../data/donnee-modele'; // Assurez-vous que le chemin d'importation est correct

export default function InfoTemperature() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const desinscrire = obtenirDerniereDonneeTemperature((nouvelleTemperature) => {
      setTemperature(nouvelleTemperature);
    });

    return () => desinscrire();
  }, []);

  return (
    <div className="info-temperature">
      <img className="img-arriere-plan" src={imgArrierePlan} alt="" />

      <div className="texte-temperature">
        <h4>{new Date().toLocaleDateString()}</h4>
        <h2>{temperature ? `${Math.round(temperature)}°C` : 'Chargement...'}</h2>

        <div className="position">
          <div className="icone-position"></div>
          <h3>Local 0000</h3>
        </div>
      </div>

      <div className="icone-temperature">
        <img src={ambient} alt="icone temperature ambiente" />
      </div>
    </div>
  );
}