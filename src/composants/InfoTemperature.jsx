import React, { useEffect, useState } from 'react';
import './InfoTemperature.scss';
import imgArrierePlan from '../images/imgArrierePlan.jpg'; 
import ambient from '../images/ambient.png'; 
import dessous from '../images/dessous.png'; 
import dessus from '../images/dessus.png'; 
import { obtenirDerniereDonneeTemperature } from '../data/donnee-modele'; 

export default function InfoTemperature({ temperatureAmbiante }) {
  const [temperature, setTemperature] = useState(null);
  let iconeTemperature;

  useEffect(() => {
    const desinscrire = obtenirDerniereDonneeTemperature((nouvelleTemperature) => {
      setTemperature(nouvelleTemperature);
    });

    return () => desinscrire();
  }, []);


  if (temperature === null) {
    iconeTemperature = ambient;
  } 
  else if (temperature > temperatureAmbiante.max) {
    iconeTemperature = dessus;
  } 
  else if (temperature < temperatureAmbiante.min) {
    iconeTemperature = dessous;
  } 
  else {
    iconeTemperature = ambient;
  }

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
        <img src={iconeTemperature} alt="icone temperature" />
      </div>
    </div>
  );
}