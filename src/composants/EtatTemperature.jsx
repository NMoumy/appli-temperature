import React, { useEffect, useState } from 'react';
import './EtatTemperature.scss';
import { obtenirDerniereDonneeTemperature } from '../data/donnee-modele';

export default function EtatTemperature({ temperatureAmbiante }) {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const desinscrire = obtenirDerniereDonneeTemperature((nouvelleTemperature) => {
      setTemperature(nouvelleTemperature);
    });

    return () => desinscrire();
  }, []);

  let message;
  if (temperature === null) {
    message = 'Chargement...';
  } else if (temperature > temperatureAmbiante.max) {
    message = 'Il fait plus chaud que la température ambiante.';
  } else if (temperature < temperatureAmbiante.min) {
    message = 'Il fait plus froid que la température ambiante.';
  } else {
    message = 'La température est ambiante.';
  }

  return (
    <div className="bloc etat-temperature">
      <p>{message}</p>
    </div>
  );
}